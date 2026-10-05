# Fontes e Atualizacao das Bases

As bases `servicos.js` e `materiais.js` representam os precos de servicos e materiais Sabesp SPO indicados na interface como atualizados para jun/2026.

Antes de liberar uma nova versao para usuarios:

1. Registre a origem do arquivo recebido, responsavel pela importacao e data de referencia.
2. Atualize `servicos.js` e/ou `materiais.js` mantendo os globais `baseServicos` e `baseMateriais`.
3. Rode `npm run validate:data`.
4. Revise duplicidades de codigo, unidade e preco antes da publicacao.
5. Atualize `version.js`, `package.json`, `sw.js` e o historico em `index.html`.

## Estado Atual

- Referencia declarada: Sabesp SPO jun/2026.
- Validacao automatica: `scripts/validate-data.mjs`.
- Campos obrigatorios verificados: codigo, descricao, unidade e preco positivo.
- Duplicidade bloqueante: mesma combinacao de codigo e descricao.

## Valores com Vigencia Legal

A UFESP e fixada anualmente pela SEFAZ-SP e a tarifa de agua pela ARSESP. O laudo
deve usar o valor vigente NA DATA DA OCORRENCIA, nao o valor atual.

- `calculos.js` expoe `TABELA_UFESP`, resolvida pelo ano da data da ocorrencia.
  Os valores devem vir da publicacao oficial da SEFAZ-SP e nao devem ser
  estimados.
- Enquanto o exercicio da ocorrencia nao constar da tabela, o aplicativo usa
  `UFESP_REFERENCIA` e exibe aviso na tela para que o usuario confira a
  vigencia. O campo e editavel em qualquer caso.
- A tarifa por m3 (`valor-m3`, padrao R$ 20,52) tambem e editavel e deve ser
  ajustada para a tarifa vigente na data da ocorrencia.

### UFESP por exercicio

| Exercicio | Valor | Conferido por | Data |
| --- | --- | --- | --- |
| 2026 | R$ 38,42 | Alessandro Ciapina | 2026-10-05 |

Exercicios anteriores a 2026 seguem pendentes: acrescentar apenas apos
conferencia na publicacao da SEFAZ-SP, registrando a linha correspondente acima.

## Historico de Importacoes

| Data importacao | Referencia | Arquivo origem | Responsavel | Observacoes |
| --- | --- | --- | --- | --- |
| 2026-08-04 | Sabesp SPO jun/2026 | `SPO_atualizado_Junho2026.xlsx` (aba `Insumos-Junho-2026` + aba `Servicos-Junho-2026`) | Alessandro Ciapina | Substituicao integral; 3.514 servicos e 4.333 insumos; linhas SiiS ignoradas (descricoes alternativas sem codigo); campo `DATA I0` ajustado para `jun/26`. |
| 2026-05-20 | Sabesp SPO mar/2026 | `SPO_atualizado_mar_o2026_1.xlsx` (aba `Insumos` + aba `Servicos`) | Alessandro Ciapina | Substituicao integral; 4062 servicos e 4323 insumos; descricoes de servicos limpas do separador `SiiS:` duplicado; campo `DATA I0` ajustado para `mar/26`. |
