// Gera servicos.js e materiais.js a partir dos CSV do SPO, aplicando o recorte
// de escopo definido para os laudos de recuperacao de danos da OVMS.
//
//   node scripts/recortar-bases.mjs <servicos.csv> <insumos.csv>
//
// Por que existe um recorte: as bases completas do SPO (8.421 registros) ficam
// publicadas num repositorio publico. O aplicativo usa uma fracao delas, de modo
// que embarcar a tabela inteira expoe muito mais do que o necessario. O recorte
// reduz a exposicao sem servidor nem autenticacao.
//
// CRITERIOS
//
// Servicos — uniao dos grupos abaixo, somente classe A:
//   reparo de redes e ramais, assentamento de redes e sondagem de redes
//     (filtrados por agua/esgoto, pois tem variantes por utilidade);
//   escavacao de valas, pavimento (LPB/LRP/CBUQ/reposicao), aterro/reaterro,
//   mobilizacao de equipes, interferencias, lastro, escoramento,
//   transporte/bota-fora e remocao/demolicao
//     (inteiros, pois sao servicos civis genericos validos em qualquer laudo).
//
//   Classe: o SPO publica variantes (A), (B) e (C) por condicao de execucao.
//   Mantem-se apenas (A) e os codigos sem classe. Conferido na base de set/2026:
//   em 301 grupos com variantes, (A) nunca e a mais barata.
//
// Materiais — familia e o criterio primario, mais seguro que palavra-chave:
//   HM (hidromecanica: tubos, pecas, valvulas, conexoes) entra inteira;
//   de CV aproveitam-se tubo de concreto, poco de visita, tampao, anel,
//   argamassa e concreto;
//   EL (eletrica), EQ (equipamentos), MO (mao de obra) e SV saem.
//   O filtro por palavra-chave seria enganoso: EL tambem tem "curva", "luva",
//   "conexao" e "tampao", de eletroduto.
//
// Tambem aplicado, independente do recorte:
//   linhas SiiS (descricao alternativa sem codigo) descartadas;
//   duplicatas de codigo descartadas, mantendo a primeira ocorrencia;
//   precos normalizados para o formato BR com duas casas.

import fs from 'node:fs';

const [servCsv, insCsv] = process.argv.slice(2);
if (!servCsv || !insCsv) {
  console.error('uso: node scripts/recortar-bases.mjs <servicos.csv> <insumos.csv>');
  process.exit(1);
}

const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();

function lerCsv(caminho) {
  const texto = fs.readFileSync(caminho, 'utf8').replace(/^﻿/, '');
  const linhas = [];
  let campo = '', registro = [], dentroDeAspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (dentroDeAspas) {
      if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') dentroDeAspas = false;
      else campo += c;
    } else if (c === '"') dentroDeAspas = true;
    else if (c === ';') { registro.push(campo); campo = ''; }
    else if (c === '\n') { registro.push(campo); linhas.push(registro); registro = []; campo = ''; }
    else if (c !== '\r') campo += c;
  }
  if (campo || registro.length) { registro.push(campo); linhas.push(registro); }
  const cabecalho = linhas.shift().map(h => h.trim());
  return linhas
    .filter(l => l.some(v => v.trim() !== ''))
    .map(l => Object.fromEntries(cabecalho.map((h, i) => [h, (l[i] ?? '').trim()])));
}

const coluna = (linha, nome) =>
  Object.keys(linha).find(k => k.trim().toLowerCase() === nome.toLowerCase());

function precoBr(valor) {
  const n = Number(String(valor).replace(/[R$\s]/g, '').replace(/\./g, '').replace(',', '.'));
  if (!Number.isFinite(n)) throw new Error(`preco invalido: ${valor}`);
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const escapar = t => String(t).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

// ─── SERVICOS ────────────────────────────────────────────────────────────────

const GRUPOS_SERVICO = [
  ['reparo de redes e ramais',   /REPARO/,                                     true],
  ['assentamento de redes',      /ASSENTAMENTO/,                               true],
  ['sondagem de redes',          /SONDAGEM/,                                   true],
  ['escavacao de valas',         /ESCAVACAO|VALA SECA|ABERTURA DE VALA/,       false],
  ['pavimento',                  /^LPB|^LRP|PAVIMENT|REPOS DO PAV|CAPA ASFALTICA|CBUQ/, false],
  ['aterro de valas',            /ATERRO/,                                     false],
  ['mobilizacao de equipes',     /MOBILIZ|^EQUIPE|DESLOCAMENTO ENTRE FRENTES/, false],
  ['interferencias',             /INTERFERENCIA/,                              false],
  ['lastro',                     /^LASTRO/,                                    false],
  ['escoramento',                /^ESCORAMENTO/,                               false],
  ['transporte / bota-fora',     /^TRANSPORTE|BOTA.FORA/,                      false],
  ['remocao / demolicao',        /^REMOCAO|DEMOLICAO/,                         false],
];

// Classe de execucao, que pode aparecer em qualquer posicao da descricao:
// "SONDAGEM EM LEITO (VALA SECA) C/ LPB DO LEITO (C) - AGUA" tem a classe no meio.
const classeDe = descricao => (norm(descricao).match(/\(([ABCD])\)/) || [])[1] ?? null;

function montarServicos(caminho) {
  const linhas = lerCsv(caminho);
  const cNum = coluna(linhas[0], 'Núm. do Preço');
  const cDesc = coluna(linhas[0], 'Descrição');
  const cData = coluna(linhas[0], 'Data i0');
  const cUnid = coluna(linhas[0], 'Unid. Med.');
  const cPreco = coluna(linhas[0], 'Preço');

  const vistos = new Set();
  let siis = 0, duplicatas = 0;
  const completos = [];
  for (const l of linhas) {
    const cod = l[cNum];
    if (!cod) { siis++; continue; }
    if (vistos.has(cod)) { duplicatas++; continue; }
    vistos.add(cod);
    completos.push({
      ITEM: Number(cod),
      DESCRICAO: l[cDesc],
      DATA: l[cData] || '',
      UNID: l[cUnid],
      PRECO: precoBr(l[cPreco]),
    });
  }

  const aguaEsgoto = d => /AGUA|ESGOTO/.test(norm(d));
  const noEscopo = r => GRUPOS_SERVICO.some(([, re, filtra]) =>
    re.test(norm(r.DESCRICAO)) && (!filtra || aguaEsgoto(r.DESCRICAO)));
  const classeA = r => { const c = classeDe(r.DESCRICAO); return c === null || c === 'A'; };

  const noEscopoTodos = completos.filter(noEscopo);
  const selecionados = noEscopoTodos.filter(classeA);
  return { completos, noEscopoTodos, selecionados, siis, duplicatas };
}

// ─── MATERIAIS ───────────────────────────────────────────────────────────────

const CV_RELEVANTE = /^TUBO|POCO DE VISITA|^POCO|TAMPAO|TAMPA DE|^ANEL|ARGAMASSA|^CONCRETO/;

function montarMateriais(caminho) {
  const linhas = lerCsv(caminho);
  const cCod = coluna(linhas[0], 'Código');
  const cDesc = coluna(linhas[0], 'Descrição');
  const cUnid = coluna(linhas[0], 'Unid. Med.');
  const cPreco = coluna(linhas[0], 'Preço');

  const vistos = new Set();
  let siis = 0, duplicatas = 0;
  const completos = [];
  for (const l of linhas) {
    const cod = l[cCod];
    if (!cod) continue;
    if (/siis/i.test(l[cDesc])) { siis++; continue; }
    if (vistos.has(cod)) { duplicatas++; continue; }
    vistos.add(cod);
    completos.push({
      COD: cod,
      DESCRICAO: l[cDesc],
      UNID: l[cUnid],
      PRECO: precoBr(l[cPreco]),
    });
  }

  const selecionados = completos.filter(m =>
    m.COD.startsWith('HM') ||
    (m.COD.startsWith('CV') && CV_RELEVANTE.test(norm(m.DESCRICAO))));
  return { completos, selecionados, siis, duplicatas };
}

// ─── SAIDA ───────────────────────────────────────────────────────────────────

const serv = montarServicos(servCsv);
const mat = montarMateriais(insCsv);

const jsServicos = 'const baseServicos = \n[\n' + serv.selecionados.map((r, i) =>
  ' {\n' +
  `   "ITEM": ${r.ITEM},\n` +
  `   "DESCRIÇÃO": "${escapar(r.DESCRICAO)}",\n` +
  `   "DATA I0": "${r.DATA}",\n` +
  `   "UNID": "${r.UNID}",\n` +
  `   "PREÇO": "${r.PRECO}"\n` +
  ' }' + (i < serv.selecionados.length - 1 ? ',' : '') + '\n').join('') + '];\n';

const jsMateriais = 'const baseMateriais = [\n' + mat.selecionados.map((r, i) =>
  ' {\n' +
  `   "Código": "${r.COD}",\n` +
  `   "Descrição": "${escapar(r.DESCRICAO)}",\n` +
  `   "Unid. Med.": "${r.UNID}",\n` +
  `   "Preço": "${r.PRECO}"\n` +
  ' }' + (i < mat.selecionados.length - 1 ? ',' : '') + '\n').join('') + '];\n';

fs.writeFileSync('servicos.js', jsServicos);
fs.writeFileSync('materiais.js', jsMateriais);

const kb = s => (Buffer.byteLength(s, 'utf8') / 1024).toFixed(0);
console.log('SERVICOS');
console.log(`  linhas SiiS descartadas : ${serv.siis}`);
console.log(`  duplicatas descartadas  : ${serv.duplicatas}`);
console.log(`  base completa do SPO    : ${serv.completos.length}`);
console.log(`  dentro do escopo        : ${serv.noEscopoTodos.length}`);
console.log(`  apos filtro classe A    : ${serv.selecionados.length}  -> servicos.js ${kb(jsServicos)} KB`);
console.log('MATERIAIS');
console.log(`  linhas SiiS descartadas : ${mat.siis}`);
console.log(`  duplicatas descartadas  : ${mat.duplicatas}`);
console.log(`  base completa do SPO    : ${mat.completos.length}`);
console.log(`  apos recorte HM + CV    : ${mat.selecionados.length}  -> materiais.js ${kb(jsMateriais)} KB`);
console.log(`TOTAL embarcado: ${serv.selecionados.length + mat.selecionados.length} registros, ${Number(kb(jsServicos)) + Number(kb(jsMateriais))} KB`);
