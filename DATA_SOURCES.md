# Fontes e Atualizacao das Bases

As bases `servicos.js` e `materiais.js` representam os precos de servicos e materiais Sabesp SPO indicados na interface como atualizados para set/2026. **Nao sao as bases completas do SPO**: carregam apenas o recorte de escopo descrito abaixo.

Antes de liberar uma nova versao para usuarios:

1. Registre a origem do arquivo recebido, responsavel pela importacao e data de referencia.
2. Gere `servicos.js` e `materiais.js` com `node scripts/recortar-bases.mjs <servicos.csv> <insumos.csv>`.
3. Rode `npm run validate:data`.
4. Revise duplicidades de codigo, unidade e preco antes da publicacao.
5. Atualize `version.js`, `package.json`, `sw.js` e o historico em `index.html`.

## Recorte de Escopo

As bases completas do SPO somam 8.421 registros e 1.594 KB. O aplicativo fica num
repositorio publico, de modo que embarcar a tabela inteira expoe muito mais do que
o necessario. O recorte reduz para 3.324 registros e 682 KB (-57%) sem exigir
servidor nem autenticacao. **E mitigacao de exposicao, nao controle de acesso:**
o que permanece embarcado continua publico, e o historico do git mantem as versoes
completas publicadas entre mar/2026 e out/2026.

Criterios, implementados em `scripts/recortar-bases.mjs`:

- **Servicos (777 de 4.063).** Uniao dos grupos usados nos laudos: reparo de redes
  e ramais, assentamento, sondagem (os tres filtrados por agua/esgoto); escavacao
  de valas, pavimento (LPB/LRP/CBUQ/reposicao), aterro, mobilizacao de equipes,
  interferencias, lastro, escoramento, transporte/bota-fora e remocao/demolicao
  (inteiros, por serem servicos civis genericos). Em seguida, **somente classe A**:
  mantem-se `(A)` e os codigos sem classe, descartando `(B)`, `(C)` e `(D)`.
- **Materiais (2.547 de 4.358).** Familia HM (hidromecanica) inteira, mais os itens
  de CV que sejam tubo de concreto, poco de visita, tampao, anel, argamassa ou
  concreto. Saem EL (eletrica), EQ (equipamentos), MO (mao de obra) e SV.
  O criterio e a familia, nao a palavra-chave: EL tambem tem "curva", "luva",
  "conexao" e "tampao", de eletroduto.

A interface informa ao usuario que a base e um recorte e orienta a consultar a
tabela SPO completa quando o item nao aparecer, em vez de substituir por aproximado.

## Estado Atual

- Referencia declarada: Sabesp SPO set/2026.
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
| 2026-10-23 | Sabesp SPO set/2026 | `Servicos_SPO_09_2026.csv` + `Insumos_SPO_09_2026.csv` | Alessandro Ciapina | Substituicao integral; 4.063 servicos e 4.358 insumos. Removidas 4.089 linhas SiiS (descricao alternativa sem codigo) e 26 duplicatas exatas de servicos, conferidas como identicas em descricao, unidade, preco e data. Campo `DATA I0` em `set/26`. |
| 2026-08-04 | Sabesp SPO jun/2026 | `SPO_atualizado_Junho2026.xlsx` (aba `Insumos-Junho-2026` + aba `Servicos-Junho-2026`) | Alessandro Ciapina | Substituicao integral; 3.514 servicos e 4.333 insumos; linhas SiiS ignoradas (descricoes alternativas sem codigo); campo `DATA I0` ajustado para `jun/26`. |
| 2026-05-20 | Sabesp SPO mar/2026 | `SPO_atualizado_mar_o2026_1.xlsx` (aba `Insumos` + aba `Servicos`) | Alessandro Ciapina | Substituicao integral; 4062 servicos e 4323 insumos; descricoes de servicos limpas do separador `SiiS:` duplicado; campo `DATA I0` ajustado para `mar/26`. |
