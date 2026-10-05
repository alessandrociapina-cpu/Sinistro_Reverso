// VERSAO DO APP
const APP_INFO = window.SABESP_APP_INFO || { version: '5.4.0', displayVersion: 'v5.4', releaseNotes: [] };
const VERSAO_APP = APP_INFO.version;
if (localStorage.getItem("versao_planilha_sabesp") !== VERSAO_APP) {
    if ('caches' in window) {
        caches.keys().then(names => { names.forEach(name => caches.delete(name)); });
    }
    localStorage.setItem("versao_planilha_sabesp", VERSAO_APP);
    window.location.reload(true);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js'); });
}

const GRAVIDADE = window.SabespCalculos?.GRAVIDADE || 9.81;
const VALOR_UFESP = 35.36;
const PRECO_M3_AGUA_PADRAO = 20.52;

// Redes de distribuicao operam tipicamente entre 10 e 50 mca; a NBR 12218
// admite 50 mca como maxima estatica. Acima disso o valor e quase sempre erro
// de digitacao, e o efeito na conta e grande (Q cresce com a raiz da pressao).
const PRESSAO_MAX_PLAUSIVEL = 100;

const estado = {
    subtotalAgua: 0,
    subtotalServicos: 0,
    subtotalMateriais: 0
};

let dbServicos = [];
let dbMateriais = [];


window.onload = () => {
    try {
        renderizarInfoVersao();
        inicializarBases();
        gerarLinhasTabela('tabela-servicos', 1, 'servico');
        gerarLinhasTabela('tabela-materiais', 1, 'material');
        tratarSecaoVazamento();
        tratarFormatoDano();
        tratarUnidade();
        tratarCausador();
    } catch(e) { console.error("Erro na inicializacao:", e); }
};

function renderizarInfoVersao() {
    const badge = document.querySelector('.version-badge');
    if (badge) badge.textContent = `${APP_INFO.displayVersion} ℹ️`;

    const changelog = document.querySelector('.changelog-box ul');
    const release = APP_INFO.releaseNotes && APP_INFO.releaseNotes[0];
    if (!changelog || !release) return;

    if (changelog.querySelector(`[data-version="${release.version}"]`)) return;

    const item = document.createElement('li');
    item.dataset.version = release.version;
    const strong = document.createElement('strong');
    strong.textContent = `${release.displayVersion}:`;
    item.appendChild(strong);
    item.appendChild(document.createTextNode(` ${release.summary}`));
    changelog.insertBefore(item, changelog.firstChild);
}

function findValueByKeys(obj, keys) {
    const objKeys = Object.keys(obj);
    for (let searchKey of keys) {
        const foundKey = objKeys.find(k => k.trim().toLowerCase() === searchKey.toLowerCase());
        if (foundKey) return obj[foundKey];
    }
    return "";
}

function inicializarBases() {
    try {
        if (typeof baseServicos !== 'undefined') {
            dbServicos = baseServicos.map(s => ({
                NPRECO: findValueByKeys(s, ["item", "npreco", "código", "codigo"]),
                ESPEC: findValueByKeys(s, ["descrição", "descricao", "espec"]),
                UNID: String(findValueByKeys(s, ["unid", "unidade"])).trim(),
                PUNIT: findValueByKeys(s, ["preço", "preco", "punit", "valor unitário", "valor"])
            }));
        }
        if (typeof baseMateriais !== 'undefined') {
            dbMateriais = baseMateriais.map(m => ({
                NPRECO: findValueByKeys(m, ["material", "item", "npreco", "código", "codigo"]),
                ESPEC: findValueByKeys(m, ["texto breve material", "descrição", "descricao", "espec", "texto breve"]),
                UNID: String(findValueByKeys(m, ["unid. med.", "unid. med", "unid.medida básica", "unid. medida basica", "unid", "unidade", "umb"])).trim(),
                PUNIT: findValueByKeys(m, ["valor unitário", "valor unitario", "preço", "preco", "punit", "valor"])
            }));
        }
    } catch(e) { console.error("Erro ao processar as bases de dados:", e); }
}

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('desc-input')) {
        document.querySelectorAll('.autocomplete-list').forEach(el => el.style.display = 'none');
    }
});

function atualizarLinhas(tipo) {
    const tabelaId = tipo === 'servico' ? 'tabela-servicos' : 'tabela-materiais';
    const tabela = document.getElementById(tabelaId);
    if (!tabela) return;

    const linhas = Array.from(tabela.querySelectorAll('tr'));
    let vazias = [];

    linhas.forEach(tr => {
        const input = tr.querySelector('.desc-input');
        if (input && input.value.trim() === '') {
            vazias.push(tr);
        } else if (input) {
            tr.style.display = '';
            tr.classList.remove('hide-on-print');
        }
    });

    if (vazias.length === 0) {
        gerarLinhasTabelaAux(tabelaId, 1, tipo);
        return;
    }

    const ultimaVazia = vazias[vazias.length - 1];
    ultimaVazia.style.display = '';

    for (let i = 0; i < vazias.length - 1; i++) {
        const tr = vazias[i];
        const input = tr.querySelector('.desc-input');
        const hasFocus = (document.activeElement === input || tr.contains(document.activeElement));
        if (hasFocus) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
            tr.classList.add('hide-on-print');
        }
    }
}

function gerarLinhasTabelaAux(tabelaId, qtd, tipo) {
    const tabela = document.getElementById(tabelaId);
    for (let i = 0; i < qtd; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="position: relative; padding: 0; overflow: visible;">
                <input type="text" class="desc-input" autocomplete="off"
                    onkeyup="mostrarSugestoes(this, '${tipo}')"
                    oninput="mostrarSugestoes(this, '${tipo}'); atualizarLinhas('${tipo}');"
                    onfocus="mostrarSugestoes(this, '${tipo}')"
                    onblur="setTimeout(() => atualizarLinhas('${tipo}'), 200)"
                    style="padding: 4px;" placeholder="Digite para buscar...">
                <div class="autocomplete-list"></div>
            </td>
            <td style="padding: 0;"><input type="text" class="num-${tipo}" readonly style="text-align: center; color: var(--text-black); font-weight: bold; padding: 4px;"></td>
            <td style="padding: 0;"><input type="text" class="unid-${tipo}" readonly style="text-align: center; padding: 4px;"></td>
            <td style="padding: 0;"><input type="number" class="qtd-${tipo}" min="0" oninput="calcSubtotalLinha(this, '${tipo}')" style="padding: 4px;"></td>
            <td style="padding: 0;"><input type="text" class="val-${tipo}" readonly style="text-align: right; padding: 4px;"></td>
            <td style="padding: 0;"><input type="text" class="sub-${tipo}" readonly value="0,00" style="text-align: right; font-weight: bold; color: var(--text-black); padding: 4px;"></td>
        `;
        tabela.appendChild(tr);
    }
}

function gerarLinhasTabela(tabelaId, qtd, tipo) {
    gerarLinhasTabelaAux(tabelaId, qtd, tipo);
    atualizarLinhas(tipo);
}

window.addEventListener('beforeprint', function() {
    ['tabela-servicos', 'tabela-materiais'].forEach(id => {
        document.querySelectorAll(`#${id} tr`).forEach(tr => {
            const inputDesc = tr.querySelector('.desc-input');
            if (inputDesc && inputDesc.value.trim() === '') tr.classList.add('hide-on-print');
        });
    });
});

window.addEventListener('afterprint', function() {
    document.querySelectorAll('.hide-on-print').forEach(el => {
        const desc = el.querySelector('.desc-input');
        if (desc && desc.value.trim() !== '') el.classList.remove('hide-on-print');
        else if (!el.style.display) el.classList.remove('hide-on-print');
    });
    atualizarLinhas('servico');
    atualizarLinhas('material');
});

function parseValor(strPunit) {
    if (strPunit === null || strPunit === undefined || strPunit === '') return 0;
    let s = String(strPunit).replace(/[R$\s]/g, '');
    if (s === '') return 0;
    // BR: dot = thousands, comma = decimal. US-fallback for retrocompat com projetos salvos.
    if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : 0;
}

function formatarBR(num, decimais = 2) {
    const v = Number.isFinite(num) ? num : 0;
    return v.toLocaleString('pt-BR', { minimumFractionDigits: decimais, maximumFractionDigits: decimais });
}

function removerAcentos(texto) {
    if (!texto) return "";
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function mostrarSugestoes(input, tipo) {
    const valPesquisa = removerAcentos(input.value);
    const db = (tipo === 'servico') ? dbServicos : dbMateriais;
    const containerDropdown = input.nextElementSibling;

    if (valPesquisa.trim() === '') {
        containerDropdown.style.display = 'none';
        limparLinha(input, tipo);
        return;
    }

    containerDropdown.innerHTML = '';

    const filtrados = db.filter(item => {
        const espec = removerAcentos(String(item.ESPEC || ''));
        const npreco = removerAcentos(String(item.NPRECO || ''));
        return espec.includes(valPesquisa) || npreco.includes(valPesquisa);
    }).slice(0, 40);

    if (filtrados.length === 0) { containerDropdown.style.display = 'none'; return; }

    filtrados.forEach(item => {
        const div = document.createElement('div');
        const strong = document.createElement('strong');
        strong.textContent = item.NPRECO;
        div.appendChild(strong);
        div.appendChild(document.createTextNode(` - ${item.ESPEC}`));
        div.onmousedown = function(e) {
            e.preventDefault();
            e.stopPropagation();
            input.value = item.ESPEC;
            containerDropdown.style.display = 'none';
            aplicarItemSelecionado(input, item, tipo);
        };
        containerDropdown.appendChild(div);
    });
    containerDropdown.style.display = 'block';
}

function limparLinha(input, tipo) {
    const tr = input.closest('tr');
    tr.querySelector(`.num-${tipo}`).value = "";
    tr.querySelector(`.unid-${tipo}`).value = "";
    tr.querySelector(`.val-${tipo}`).value = "";
    calcSubtotalLinha(tr.querySelector(`.qtd-${tipo}`), tipo);
    atualizarLinhas(tipo);
}

function aplicarItemSelecionado(input, item, tipo) {
    const tr = input.closest('tr');
    tr.querySelector(`.num-${tipo}`).value = item.NPRECO;
    tr.querySelector(`.unid-${tipo}`).value = item.UNID;
    tr.querySelector(`.val-${tipo}`).value = formatarBR(parseValor(item.PUNIT));
    calcSubtotalLinha(tr.querySelector(`.qtd-${tipo}`), tipo);
    atualizarLinhas(tipo);
}

function valorCampo(id) {
    return String(document.getElementById(id)?.value || '').trim();
}

function campoOutrosValido(selectId, inputId, rotulo, erros) {
    if (valorCampo(selectId) === 'Outros' && !valorCampo(inputId)) {
        erros.push(`${rotulo}: informe o valor no campo Outros.`);
    }
}

function obterErrosValidacaoDocumento() {
    const erros = [];

    [
        ['sef', 'Identificacao no campo no'],
        ['unidade', 'Unidade'],
        ['endereco-local', 'Endereco'],
        ['os', 'OS'],
        ['data-dano', 'Data da ocorrencia'],
        ['hora-dano', 'Hora da ocorrencia']
    ].forEach(([id, rotulo]) => {
        if (!valorCampo(id)) erros.push(`${rotulo}: preenchimento obrigatorio.`);
    });

    if (valorCampo('unidade') === 'Outras' && !valorCampo('unidade-outros')) {
        erros.push('Unidade: informe o nome da unidade no campo aberto.');
    }

    campoOutrosValido('causador', 'causador-outros', 'Causador dos danos', erros);
    campoOutrosValido('tipo-dano', 'tipo-dano-outros', 'Tipo do dano', erros);
    campoOutrosValido('material-dano', 'material-dano-outros', 'Material', erros);
    campoOutrosValido('diametro-dano', 'diametro-dano-outros', 'Diametro', erros);

    if (danoEnvolveAgua()) {
        const periodo = window.SabespCalculos?.calcularTempoSegundos(
            valorCampo('data-ini'),
            valorCampo('hora-ini'),
            valorCampo('data-fim'),
            valorCampo('hora-fim')
        );

        if (!periodo?.valido) {
            erros.push('Agua perdida: informe inicio e fim validos da ocorrencia.');
        }

        const pressao = parseFloat(valorCampo('pressao')) || 0;
        if (pressao <= 0) {
            erros.push('Agua perdida: pressao deve ser maior que zero.');
        } else if (pressao > PRESSAO_MAX_PLAUSIVEL) {
            erros.push(`Agua perdida: pressao de ${formatarBR(pressao, 2)} mca excede o limite plausivel de `
                + `${PRESSAO_MAX_PLAUSIVEL} mca em rede de distribuicao. Confira o valor informado.`);
        }

        const tempoFechamento = parseFloat(valorCampo('tempo-manobra')) || 0;
        if (tempoFechamento <= 0) {
            erros.push('Agua perdida: informe o tempo de vazamento ate o fechamento dos registros (maior que zero).');
        }

        if (valorCampo('tipo-secao') === 'Área do Furo') {
            if (valorCampo('formato-dano') === 'circular') {
                const diametroFuro = parseFloat(valorCampo('diametro-furo')) || 0;
                if (diametroFuro <= 0) erros.push('Agua perdida: diametro do furo deve ser maior que zero.');
            } else {
                const comp = parseFloat(valorCampo('comp-furo')) || 0;
                const larg = parseFloat(valorCampo('larg-furo')) || 0;
                if (comp <= 0 || larg <= 0) erros.push('Agua perdida: comprimento e largura devem ser maiores que zero.');
            }
        } else if (diametroNominalMm() <= 0) {
            erros.push('Agua perdida: informe um diametro valido para Secao Plena.');
        }
    }

    return erros;
}

function validarAntesDeAcao(nomeAcao) {
    const erros = obterErrosValidacaoDocumento();
    if (erros.length === 0) return true;
    alert(`Antes de ${nomeAcao}, corrija:\n\n- ${erros.join('\n- ')}`);
    return false;
}

function imprimirProjeto() {
    if (validarAntesDeAcao('imprimir ou gerar PDF')) window.print();
}

function salvarProjeto() {
    if (!validarAntesDeAcao('salvar o projeto')) return;

    const projeto = { inputsGerais: {}, tabelaServicos: [], tabelaMateriais: [] };

    document.querySelectorAll('input[id], select[id]').forEach(el => {
        if (el.id !== 'input-arquivo') projeto.inputsGerais[el.id] = el.value;
    });

    ['rodape-unidade-dep', 'rodape-endereco'].forEach(id => {
        const el = document.getElementById(id);
        if (el) projeto.inputsGerais[id] = el.innerText;
    });

    document.querySelectorAll('#tabela-servicos tr').forEach(tr => {
        const desc = tr.querySelector('.desc-input');
        if (desc && desc.value.trim() !== '') {
            projeto.tabelaServicos.push({
                desc: desc.value, qtd: tr.querySelector('.qtd-servico').value,
                npreco: tr.querySelector('.num-servico').value,
                unid: tr.querySelector('.unid-servico').value, val: tr.querySelector('.val-servico').value
            });
        }
    });

    document.querySelectorAll('#tabela-materiais tr').forEach(tr => {
        const desc = tr.querySelector('.desc-input');
        if (desc && desc.value.trim() !== '') {
            projeto.tabelaMateriais.push({
                desc: desc.value, qtd: tr.querySelector('.qtd-material').value,
                npreco: tr.querySelector('.num-material').value,
                unid: tr.querySelector('.unid-material').value, val: tr.querySelector('.val-material').value
            });
        }
    });

    const blob = new Blob([JSON.stringify(projeto)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Orcamento_${document.getElementById('sef').value || 'Sabesp'}.json`;
    a.click();
}

function carregarProjeto(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const projeto = JSON.parse(e.target.result);

            for (let id in projeto.inputsGerais) {
                const el = document.getElementById(id);
                if (el && el.tagName !== 'SPAN') el.value = projeto.inputsGerais[id];
            }

            tratarUnidade(); tratarDano(); tratarDropdown('material-dano'); tratarDropdown('diametro-dano'); tratarSecaoVazamento(); tratarFormatoDano(); tratarCausador();

            ['rodape-unidade-dep', 'rodape-endereco'].forEach(id => {
                const el = document.getElementById(id);
                if (el && projeto.inputsGerais[id] !== undefined) el.innerText = projeto.inputsGerais[id];
            });

            document.getElementById('tabela-servicos').innerHTML = '';
            document.getElementById('tabela-materiais').innerHTML = '';

            function restaurarTabela(itens, tabelaId, tipo) {
                if (itens && itens.length > 0) {
                    itens.forEach(item => {
                        gerarLinhasTabelaAux(tabelaId, 1, tipo);
                        const trs = document.querySelectorAll(`#${tabelaId} tr`);
                        const tr = trs[trs.length - 1];
                        const descInput = tr.querySelector('.desc-input');
                        descInput.value = item.desc;
                        tr.querySelector(`.qtd-${tipo}`).value = item.qtd;
                        const db = tipo === 'servico' ? dbServicos : dbMateriais;
                        const obj = db.find(x => x.ESPEC === item.desc || `${x.NPRECO} - ${x.ESPEC}` === item.desc);
                        if (obj) {
                            aplicarItemSelecionado(descInput, obj, tipo);
                        } else if (item.val) {
                            tr.querySelector(`.num-${tipo}`).value = item.npreco || '';
                            tr.querySelector(`.unid-${tipo}`).value = item.unid || '';
                            tr.querySelector(`.val-${tipo}`).value = item.val;
                            calcSubtotalLinha(tr.querySelector(`.qtd-${tipo}`), tipo);
                        }
                    });
                } else {
                    gerarLinhasTabelaAux(tabelaId, 1, tipo);
                }
            }

            restaurarTabela(projeto.tabelaServicos, 'tabela-servicos', 'servico');
            restaurarTabela(projeto.tabelaMateriais, 'tabela-materiais', 'material');

            calcularAgua();
            atualizarLinhas('servico');
            atualizarLinhas('material');
        } catch(err) {
            alert("Erro ao ler o arquivo do projeto.");
        }
        event.target.value = "";
    };
    reader.readAsText(file);
}

function calcSubtotalLinha(inputQtd, tipo) {
    const tr = inputQtd.closest('tr');
    const qtd = Math.max(0, parseValor(inputQtd.value));
    const valUnit = parseValor(tr.querySelector(`.val-${tipo}`).value);
    tr.querySelector(`.sub-${tipo}`).value = formatarBR(qtd * valUnit);
    somarTabela(tipo);
}

function somarTabela(tipo) {
    let total = 0;
    document.querySelectorAll(`.sub-${tipo}`).forEach(s => total += parseValor(s.value));

    if (tipo === 'servico') {
        estado.subtotalServicos = total;
        document.getElementById('subtotal-servicos').innerText = formatarBR(total);
    } else {
        estado.subtotalMateriais = total;
        document.getElementById('subtotal-materiais').innerText = formatarBR(total);
    }

    const sub2 = estado.subtotalServicos + estado.subtotalMateriais;
    document.getElementById('subtotal-2').innerText = formatarBR(sub2);
    calcularGeral();
}

function calcularGeral() {
    const sub1 = estado.subtotalAgua;
    const sub2 = estado.subtotalServicos + estado.subtotalMateriais;
    const taxaBdi = Math.max(0, parseValor(document.getElementById('taxa-bdi').value));
    const sub3 = sub2 * (taxaBdi / 100);
    document.getElementById('subtotal-3').innerText = formatarBR(sub3);
    document.getElementById('resumo-1').innerText = formatarBR(sub1);
    document.getElementById('resumo-2').innerText = formatarBR(sub2);
    document.getElementById('resumo-3').innerText = formatarBR(sub3);
    const totalGeral = sub1 + sub2 + sub3;
    document.getElementById('total-final').innerText = formatarBR(totalGeral);
    document.getElementById('total-ufesp').innerText = formatarBR(totalGeral / obterUfespVigente());
}

// A UFESP e fixada por exercicio e o laudo deve usar a vigente na data da
// ocorrencia. Quando o exercicio nao consta da tabela oficial, mantem-se o
// valor de referencia e a interface alerta para conferir a vigencia.
function obterUfespVigente() {
    const campo = document.getElementById('valor-ufesp');
    const aviso = document.getElementById('aviso-ufesp');
    const referencia = window.SabespCalculos
        ? window.SabespCalculos.obterUfesp(document.getElementById('data-dano')?.value)
        : { valor: VALOR_UFESP, ano: null, oficial: false };

    if (campo && referencia.oficial && document.activeElement !== campo) {
        campo.value = referencia.valor;
    }

    const informado = campo ? Math.max(0, parseFloat(campo.value) || 0) : 0;
    const valor = informado > 0 ? informado : referencia.valor;

    if (aviso) {
        if (referencia.oficial) {
            aviso.style.display = 'none';
            aviso.innerText = '';
        } else {
            aviso.style.display = 'block';
            aviso.innerText = referencia.ano
                ? `Confira a UFESP vigente em ${referencia.ano}: o exercício não consta da tabela oficial do aplicativo.`
                : 'Informe a data da ocorrência para validar a UFESP vigente.';
        }
    }
    return valor > 0 ? valor : VALOR_UFESP;
}

const ENDERECO_OVMS = 'Av. Heitor Villa Lobos, 1229 - Vila Ema - CEP 12243-260 - São José dos Campos - SP\nTel. 55(12)3904-3202.  www.sabesp.com.br';

function tratarUnidade() {
    const select = document.getElementById('unidade');
    const inputOutros = document.getElementById('unidade-outros');
    const outrosRow = document.getElementById('unidade-outros-row');
    const rodapeUnidadeDep = document.getElementById('rodape-unidade-dep');
    const rodapeEndereco = document.getElementById('rodape-endereco');
    const rodapeSite = document.getElementById('rodape-site');
    const val = select.value;

    if (val === 'Outras') {
        outrosRow.style.display = '';
        select.classList.add('hide-on-print');
        rodapeUnidadeDep.innerText = inputOutros.value || '_______________________________________________________';
        rodapeEndereco.innerText = '';
        if (rodapeSite) rodapeSite.style.display = '';
    } else {
        outrosRow.style.display = 'none';
        inputOutros.value = '';
        select.classList.remove('hide-on-print');
        rodapeUnidadeDep.innerText = val;
        const isOvms = val.includes('OVMS');
        rodapeEndereco.innerText = isOvms ? ENDERECO_OVMS : '';
        // O endereço da OVMS já inclui telefone e www.sabesp.com.br,
        // então a linha estática é ocultada para não duplicar o site.
        if (rodapeSite) rodapeSite.style.display = isOvms ? 'none' : '';
    }
}

function tratarUnidadeOutros() {
    const val = document.getElementById('unidade-outros').value;
    document.getElementById('rodape-unidade-dep').innerText = val || '_______________________________________________________';
}

function tratarCausador() {
    const select = document.getElementById('causador');
    const inputOutros = document.getElementById('causador-outros');
    if (select.value === 'Outros') {
        inputOutros.classList.remove('hidden');
        select.classList.add('hide-on-print');
    } else {
        inputOutros.classList.add('hidden');
        inputOutros.value = '';
        select.classList.remove('hide-on-print');
    }
}

function tratarDano() {
    const val = document.getElementById('tipo-dano').value;
    const inputOutros = document.getElementById('tipo-dano-outros');
    const secaoAgua = document.getElementById('secao-agua');
    if (val === 'Outros') inputOutros.classList.remove('hidden');
    else inputOutros.classList.add('hidden');

    secaoAgua.style.display = danoEnvolveAgua() ? 'table' : 'none';
    calcularAgua();
}

function tratarDropdown(id) {
    const val = document.getElementById(id).value;
    const inputOutros = document.getElementById(id + '-outros');
    if (val === 'Outros') inputOutros.classList.remove('hidden');
    else inputOutros.classList.add('hidden');
    if (id === 'diametro-dano') calcularAgua();
}

function tratarSecaoVazamento() {
    const val = document.getElementById('tipo-secao').value;
    const formatoSelect = document.getElementById('formato-dano');
    const avisoPlena = document.getElementById('aviso-secao-plena');
    const pressaoInput = document.getElementById('pressao');
    const trManobra = document.getElementById('tr-manobra');
    const thFormato = document.getElementById('th-formato');
    const thDim1 = document.getElementById('th-dim-1');
    const thDim2 = document.getElementById('th-dim-2');
    const tdFormato = document.getElementById('td-formato');
    const tdDim1 = document.getElementById('td-dim-1');
    const tdDim2 = document.getElementById('td-dim-2');

    const trLados = document.getElementById('tr-lados');
    const trExpansao = document.getElementById('tr-expansao');

    // O tempo de fechamento limita o periodo faturavel nos dois modos: se a
    // equipe isolou a rede, o vazamento cessou, seja furo ou tubo rompido.
    if (trManobra) trManobra.style.display = '';

    if (val === 'Área do Furo') {
        formatoSelect.style.display = 'inline-block';
        avisoPlena.style.display = 'none';
        pressaoInput.disabled = false;
        if (trLados) trLados.style.display = 'none';
        if (trExpansao) trExpansao.style.display = '';
        thFormato.colSpan = 3;
        tdFormato.colSpan = 3;
        thFormato.innerText = "Formato do Dano";
        tratarFormatoDano();
    } else {
        formatoSelect.style.display = 'none';
        avisoPlena.style.display = 'block';
        pressaoInput.disabled = false;
        if (trLados) trLados.style.display = '';
        if (trExpansao) trExpansao.style.display = 'none';
        thDim1.style.display = 'none';
        thDim2.style.display = 'none';
        tdDim1.style.display = 'none';
        tdDim2.style.display = 'none';
        thFormato.colSpan = 5;
        tdFormato.colSpan = 5;
        thFormato.innerText = "V = (2/3)·Cd·A·√(2gH)·T";
    }
    calcularAgua();
}

function tratarFormatoDano() {
    const secao = document.getElementById('tipo-secao').value;
    if (secao !== 'Área do Furo') return;

    const formato = document.getElementById('formato-dano').value;
    const thDim1 = document.getElementById('th-dim-1');
    const thDim2 = document.getElementById('th-dim-2');
    const tdDim1 = document.getElementById('td-dim-1');
    const tdDim2 = document.getElementById('td-dim-2');
    const inputDiam = document.getElementById('diametro-furo');
    const inputComp = document.getElementById('comp-furo');

    if (formato === 'circular') {
        thDim1.style.display = 'table-cell';
        tdDim1.style.display = 'table-cell';
        thDim1.colSpan = 2;
        tdDim1.colSpan = 2;
        thDim1.innerText = "Diâm. (cm)";
        inputDiam.style.display = 'inline-block';
        inputComp.style.display = 'none';
        thDim2.style.display = 'none';
        tdDim2.style.display = 'none';
    } else {
        thDim1.style.display = 'table-cell';
        tdDim1.style.display = 'table-cell';
        thDim1.colSpan = 1;
        tdDim1.colSpan = 1;
        thDim1.innerText = "Comp.(cm)";
        inputDiam.style.display = 'none';
        inputComp.style.display = 'inline-block';
        thDim2.style.display = 'table-cell';
        tdDim2.style.display = 'table-cell';
        thDim2.colSpan = 1;
        tdDim2.colSpan = 1;
        thDim2.innerText = "Larg.(cm)";
    }
    calcularAgua();
}

function calcularVazaoOrificio(cd, areaM2, pressaoMca) {
    if (window.SabespCalculos) return window.SabespCalculos.calcularVazaoOrificio(cd, areaM2, pressaoMca);
    if (pressaoMca <= 0 || areaM2 <= 0 || cd <= 0) return 0;
    return (cd * areaM2 * Math.sqrt(2 * GRAVIDADE * pressaoMca)) * 1000;
}

function alternarBotoesAcao(desabilitar) {
    const msg = desabilitar ? 'Ação bloqueada: diâmetro sem vazão tabelada.' : '';
    ['btn-imprimir-proj', 'btn-salvar-proj'].forEach(id => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.disabled = desabilitar;
        btn.style.opacity = desabilitar ? '0.5' : '1';
        btn.style.cursor = desabilitar ? 'not-allowed' : 'pointer';
        btn.title = msg;
    });
}

// Verdadeiro apenas quando o tipo de dano envolve rede/ramal de agua.
// Reparos de esgoto nao geram perda de agua faturavel.
function danoEnvolveAgua() {
    const tipo = String(document.getElementById('tipo-dano')?.value || '').toLowerCase();
    return tipo.includes('agua') || tipo.includes('água');
}

function diametroNominalMm() {
    const sel = String(document.getElementById('diametro-dano').value).trim();
    return sel === 'Outros'
        ? (parseFloat(document.getElementById('diametro-dano-outros').value) || 0)
        : (parseFloat(sel) || 0);
}

function materialDano() {
    const sel = String(document.getElementById('material-dano').value).trim();
    return sel === 'Outros'
        ? String(document.getElementById('material-dano-outros').value || '').trim()
        : sel;
}

function zerarAgua() {
    estado.subtotalAgua = 0;
    document.getElementById('calc-vazao').innerText = formatarBR(0, 3);
    document.getElementById('calc-vol').innerText = formatarBR(0);
    document.getElementById('calc-total-agua').innerText = formatarBR(0);
    document.getElementById('subtotal-1').innerText = formatarBR(0);
    const memoria = document.getElementById('memoria-calculo');
    if (memoria) memoria.innerHTML = '';
    calcularGeral();
}

function calcularAgua() {
    // Guarda contra o acoplamento com campos fora da secao de agua (diametro,
    // material): sem isso, mexer no diametro depois de trocar o tipo de dano
    // para esgoto fazia a cobranca de agua reaparecer com a secao oculta.
    if (!danoEnvolveAgua()) {
        zerarAgua();
        alternarBotoesAcao(false);
        return;
    }

    const tipoSecao = document.getElementById('tipo-secao').value;
    const dIni = document.getElementById('data-ini').value;
    const hIni = document.getElementById('hora-ini').value;
    const dFim = document.getElementById('data-fim').value;
    const hFim = document.getElementById('hora-fim').value;
    const pressao = Math.max(0, parseFloat(document.getElementById('pressao').value) || 0);
    const precoM3 = Math.max(0, parseFloat(document.getElementById('valor-m3').value) || 0);

    const periodo = window.SabespCalculos?.calcularTempoSegundos(dIni, hIni, dFim, hFim);
    const segundos = periodo ? periodo.segundos : 0;
    document.getElementById('calc-segundos').innerText = segundos;

    const diamMm = diametroNominalMm();
    const material = materialDano();
    const distanciaFonteM = Math.max(0, parseFloat(document.getElementById('distancia-fonte')?.value) || 0);
    const tempoFechamentoMin = Math.max(1, parseFloat(document.getElementById('tempo-manobra').value) || 30);
    const tempoFechamentoS = tempoFechamentoMin * 60;

    const comum = {
        diamNominalMm: diamMm,
        pressaoMca: pressao,
        tempoFechamentoS,
        totalIncidenteS: segundos,
        distanciaFonteM,
        material
    };

    let vazaoLs = 0;
    let volM3 = 0;
    let bloquear = false;

    if (tipoSecao === 'Área do Furo') {
        const formato = document.getElementById('formato-dano').value;
        let areaM2 = 0;
        let cd = 0.61;
        if (formato === 'circular') {
            cd = 0.61;
            const diamCm = Math.max(0, parseFloat(document.getElementById('diametro-furo').value) || 0);
            areaM2 = Math.PI * Math.pow((diamCm / 100) / 2, 2);
        } else {
            cd = formato === 'irregular' ? 0.55 : (formato === 'longitudinal' ? 0.80 : 0.58);
            const compCm = Math.max(0, parseFloat(document.getElementById('comp-furo').value) || 0);
            const largCm = Math.max(0, parseFloat(document.getElementById('larg-furo').value) || 0);
            areaM2 = (compCm / 100) * (largCm / 100);
        }
        const expansao = parseFloat(document.getElementById('expansao-fissura')?.value) || 0;
        const r = window.SabespCalculos.avaliarAreaFuro({
            ...comum, cd, areaInformadaM2: areaM2, expansaoPor10Mca: expansao
        });
        vazaoLs = r.vazaoLs;
        volM3 = r.volumeM3;
        renderizarMemoriaFuro(r, { cd, formato, expansao, pressao, segundos, diamMm });
    } else {
        if (diamMm > 0 && pressao > 0) {
            const lados = parseInt(document.getElementById('lados-ruptura')?.value, 10) === 2 ? 2 : 1;
            const r = window.SabespCalculos.avaliarSecaoPlena({ ...comum, lados });
            vazaoLs = r.vazaoInicialLs;
            volM3 = r.volumeM3;
            renderizarMemoriaPlena(r, { pressao, segundos, diamMm });
            document.getElementById('aviso-secao-plena').innerText = '';
        } else {
            bloquear = (diamMm <= 0);
            const aviso = document.getElementById('aviso-secao-plena');
            if (pressao <= 0) { aviso.innerText = 'Informe a pressão da rede (mca).'; aviso.style.color = '#888'; }
            else { aviso.innerText = 'Diâmetro inválido.'; aviso.style.color = 'red'; }
            const memoria = document.getElementById('memoria-calculo');
            if (memoria) memoria.innerHTML = '';
        }
    }

    alternarBotoesAcao(bloquear);
    document.getElementById('calc-vazao').innerText = formatarBR(vazaoLs, 3);
    document.getElementById('calc-vol').innerText = formatarBR(volM3);

    const totalAgua = volM3 * precoM3;
    document.getElementById('calc-total-agua').innerText = formatarBR(totalAgua);
    document.getElementById('subtotal-1').innerText = formatarBR(totalAgua);
    estado.subtotalAgua = totalAgua;
    calcularGeral();
}

function textoLimitante(r) {
    if (!r.capacidadeAtiva) return '';
    const origem = r.limitante === 'atrito'
        ? 'perda de carga na tubulação, por Hazen-Williams'
        : `teto de velocidade de ${formatarBR(window.SabespCalculos.VELOCIDADE_MAX_RUPTURA, 0)} m/s`;
    return ` &ndash; <em>vazão limitada pela capacidade da rede (${origem});`
        + ` o orifício isolado indicaria ${formatarBR(r.vazaoOrificioLs, 3)} L/s</em>`;
}

function renderizarMemoriaPlena(r, ctx) {
    const memoria = document.getElementById('memoria-calculo');
    if (!memoria) return;
    const origemPressao = document.getElementById('origem-pressao')?.value || '';
    memoria.innerHTML =
        `<strong>Memória de cálculo &ndash; Seção Plena.</strong> `
        + `Tubo DN ${formatarBR(ctx.diamMm, 0)} mm, seção ${formatarBR(r.areaM2 * 1e4, 2)} cm². `
        + `Pressão ${formatarBR(ctx.pressao, 2)} mca (${origemPressao}). `
        + `Q&#x2080; = <strong>${formatarBR(r.vazaoInicialLs, 3)} L/s</strong>`
        + (r.lados === 2 ? ' (alimentação pelos dois lados)' : ' (alimentação por um lado)')
        + textoLimitante(r) + '. '
        + `Tempo de vazamento ${formatarBR(r.tempoEfetivoS, 0)} s`
        + (r.tempoLimitado ? ` <em>(limitado pelo fechamento; ocorrência: ${formatarBR(ctx.segundos, 0)} s)</em>` : '')
        + '. '
        + `Pressão decai de P&#x2080; a zero, logo V = &#8532;&middot;Q&#x2080;&middot;T, `
        + `com vazão média de ${formatarBR(r.vazaoMediaLs, 3)} L/s. `
        + `<strong>Volume = ${formatarBR(r.volumeM3, 3)} m³.</strong>`;
}

function renderizarMemoriaFuro(r, ctx) {
    const memoria = document.getElementById('memoria-calculo');
    if (!memoria) return;
    const origemPressao = document.getElementById('origem-pressao')?.value || '';
    let texto = `<strong>Memória de cálculo &ndash; Área do Furo.</strong> `
        + `Abertura ${ctx.formato} (Cd = ${formatarBR(ctx.cd, 2)}), `
        + `área ${formatarBR(r.areaEfetivaM2 * 1e4, 2)} cm²`;
    if (r.excedeSecao) {
        texto += ` <em>(a área informada, ${formatarBR(r.areaInformadaM2 * 1e4, 2)} cm², excede a seção do tubo`
            + ` de ${formatarBR(r.areaTuboM2 * 1e4, 2)} cm² e foi limitada a ela &ndash; reavalie a classificação`
            + ` como Seção Plena)</em>`;
    }
    if (ctx.expansao > 0) {
        texto += `, expandida a ${formatarBR(r.areaExpandidaM2 * 1e4, 2)} cm² sob carga`
            + ` (FAVAD, ${formatarBR(ctx.expansao * 100, 0)}% por 10 mca)`;
    }
    texto += `. Pressão ${formatarBR(ctx.pressao, 2)} mca (${origemPressao}). `
        + `Q = <strong>${formatarBR(r.vazaoLs, 3)} L/s</strong>${textoLimitante(r)}. `
        + `Tempo de vazamento ${formatarBR(r.tempoEfetivoS, 0)} s`
        + (r.tempoLimitado ? ` <em>(limitado pelo fechamento; ocorrência: ${formatarBR(ctx.segundos, 0)} s)</em>` : '')
        + `. Pressão mantida pela rede, logo V = Q&middot;T. `
        + `<strong>Volume = ${formatarBR(r.volumeM3, 3)} m³.</strong>`;
    memoria.innerHTML = texto;
}
