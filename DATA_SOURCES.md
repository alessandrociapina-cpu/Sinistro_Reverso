# Fontes e Atualizacao das Bases

As bases `servicos.js` e `materiais.js` representam os precos de servicos e materiais Sabesp SPO indicados na interface como atualizados para jan/2026.

Antes de liberar uma nova versao para usuarios:

1. Registre a origem do arquivo recebido, responsavel pela importacao e data de referencia.
2. Atualize `servicos.js` e/ou `materiais.js` mantendo os globais `baseServicos` e `baseMateriais`.
3. Rode `npm run validate:data`.
4. Revise duplicidades de codigo, unidade e preco antes da publicacao.
5. Atualize `version.js`, `package.json`, `sw.js` e o historico em `index.html`.

## Estado Atual

- Referencia declarada: Sabesp SPO jan/2026.
- Validacao automatica: `scripts/validate-data.mjs`.
- Campos obrigatorios verificados: codigo, descricao, unidade e preco positivo.
- Duplicidade bloqueante: mesma combinacao de codigo e descricao.
