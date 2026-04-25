import fs from 'node:fs';
import vm from 'node:vm';

const definitions = [
  {
    file: 'servicos.js',
    globalName: 'baseServicos',
    codeKeys: ['ITEM', 'item', 'Codigo', 'Codigo', 'codigo', 'código'],
    descKeys: ['DESCRICAO', 'DESCRIÇÃO', 'descrição', 'descricao', 'espec'],
    unitKeys: ['UNID', 'unid', 'unidade'],
    priceKeys: ['PRECO', 'PREÇO', 'preço', 'preco', 'punit', 'valor']
  },
  {
    file: 'materiais.js',
    globalName: 'baseMateriais',
    codeKeys: ['Codigo', 'Código', 'codigo', 'código', 'Material', 'material'],
    descKeys: ['Descricao', 'Descrição', 'descrição', 'descricao', 'Texto breve material', 'texto breve material'],
    unitKeys: ['Unid. Med.', 'Unid. Med', 'unid. med.', 'unid', 'unidade', 'UMB'],
    priceKeys: ['Preco', 'Preço', 'preço', 'preco', 'Valor unitario', 'Valor unitário', 'valor']
  }
];

function loadArray(file, globalName) {
  const source = fs.readFileSync(file, 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.__value = ${globalName};`, context, { filename: file });
  return context.__value;
}

function normalizeKey(key) {
  return String(key)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

function valueByKeys(item, keys) {
  const normalized = new Map(Object.keys(item).map(key => [normalizeKey(key), key]));
  for (const key of keys) {
    const actual = normalized.get(normalizeKey(key));
    if (actual) return item[actual];
  }
  return '';
}

function parsePrice(value) {
  if (value === null || value === undefined || value === '') return NaN;
  const cleaned = String(value).replace(/[R$\s]/g, '').replace(/\./g, '').replace(',', '.');
  return Number.parseFloat(cleaned);
}

let failures = 0;

for (const definition of definitions) {
  const rows = loadArray(definition.file, definition.globalName);
  const seenExact = new Set();
  const problems = [];

  if (!Array.isArray(rows) || rows.length === 0) {
    problems.push('base vazia ou nao carregada');
  }

  rows.forEach((row, index) => {
    const code = String(valueByKeys(row, definition.codeKeys)).trim();
    const desc = String(valueByKeys(row, definition.descKeys)).trim();
    const unit = String(valueByKeys(row, definition.unitKeys)).trim();
    const priceRaw = valueByKeys(row, definition.priceKeys);
    const price = parsePrice(priceRaw);
    const identity = `${code}::${desc}`;

    if (!code) problems.push(`linha ${index + 1}: codigo vazio`);
    if (!desc) problems.push(`linha ${index + 1}: descricao vazia`);
    if (!unit) problems.push(`linha ${index + 1}: unidade vazia`);
    if (!Number.isFinite(price) || price <= 0) problems.push(`linha ${index + 1}: preco invalido (${priceRaw})`);
    if (seenExact.has(identity)) problems.push(`linha ${index + 1}: duplicidade exata de codigo+descricao (${identity})`);
    seenExact.add(identity);
  });

  if (problems.length > 0) {
    failures += problems.length;
    console.error(`\n${definition.file}: ${problems.length} problema(s)`);
    problems.slice(0, 30).forEach(problem => console.error(`- ${problem}`));
    if (problems.length > 30) console.error(`- ... mais ${problems.length - 30} problema(s)`);
  } else {
    console.log(`${definition.file}: ${rows.length} registros validos`);
  }
}

if (failures > 0) {
  console.error(`\nValidacao falhou com ${failures} problema(s).`);
  process.exit(1);
}

console.log('\nValidacao das bases concluida sem problemas.');
