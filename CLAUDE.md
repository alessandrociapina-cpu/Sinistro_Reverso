# Sinistro Reverso — instrucoes do projeto

Aplicativo de laudo de recuperacao de danos a redes de agua e esgoto (OVMS/Sabesp).
PWA estatico, sem backend, publicado pelo GitHub Pages a partir da branch `main`.

## REGRA CRITICA: nunca comitar as bases completas do SPO

O repositorio e **publico**. As bases completas do SPO (cerca de 8.400 registros)
expoem muito mais do que o aplicativo usa.

Quando o usuario enviar as planilhas do SPO (CSV ou XLSX de servicos e insumos),
**sempre** gerar as bases pelo script de recorte, nunca convertendo a planilha
inteira:

```
node scripts/recortar-bases.mjs <servicos.csv> <insumos.csv>
node scripts/validate-data.mjs
```

O script aplica numa so passagem: remocao das linhas SiiS, deduplicacao de
codigos, normalizacao de precos para o formato BR e os filtros de escopo
(servicos dos grupos do laudo apenas classe A; materiais da familia HM mais
tubo de concreto, poco de visita, tampao e anel de CV, sem EL/EQ/MO/SV).

Os criterios e a motivacao estao em `DATA_SOURCES.md`. Se a planilha vier em
XLSX, converter para CSV com separador `;` e passar ao script — nao escrever um
conversor novo que ignore o recorte.

Antes de comitar, conferir que `servicos.js` e `materiais.js` nao voltaram ao
tamanho da base completa:

```
grep -c '"ITEM"' servicos.js      # ordem de centenas, nao milhares
grep -c '"Código"' materiais.js   # sem itens EL/EQ/MO/SV
```

## Checklist de release

Toda alteracao visivel ao usuario sobe a versao em quatro lugares, que devem
ficar iguais:

1. `version.js` — `version`, `displayVersion` e nova entrada no topo de `releaseNotes`
2. `index.html` — `.version-badge` e novo `<li data-version="...">` no changelog
3. `sw.js` — `CACHE_VERSION` (sem isso o PWA serve a versao antiga em cache)
4. `package.json` — `version`

## Testes

```
node scripts/validate-data.mjs     # integridade das bases
npx playwright test                # 14 e2e, inclui a suite unitaria de tests.js
```

A suite unitaria roda no navegador em `index.html?tests=true` e expoe o
resultado em `window.__SABESP_TEST_RESULTS__`. As assercoes de versao leem de
`SABESP_APP_INFO`, de proposito, para nao desatualizarem a cada release.

O Playwright instalado pode nao encontrar o navegador do ambiente; nesse caso
usar `launchOptions.executablePath` apontando para o Chromium disponivel, em
config temporaria fora do versionamento.

## Valores com vigencia legal

UFESP e tarifa de agua mudam por exercicio e o laudo deve usar o valor vigente
**na data da ocorrencia**, nao o atual. `calculos.js` tem `TABELA_UFESP` por ano.
Nao estimar esses valores: so preencher com a publicacao oficial, registrando a
fonte em `DATA_SOURCES.md`. Fora da tabela, a interface alerta o usuario.

## Calculo de agua perdida

O motor esta em `calculos.js`, puro e congelado com `Object.freeze`. Pontos que
nao devem ser revertidos por engano:

- A vazao e limitada pela capacidade hidraulica da tubulacao: teto de 6 m/s
  sempre, mais perda de carga por Hazen-Williams quando a distancia ate a fonte
  e informada. Sem isso o orificio com carga estatica plena produz velocidades
  de 11 a 26 m/s, fisicamente implausiveis.
- O campo de tempo e o vazamento **ate o fechamento dos registros** e funciona
  como teto do periodo faturavel, nos dois modos de calculo.
- Em Secao Plena a pressao decai de P0 a zero ao longo do vazamento, de modo que
  a vazao media e 2/3 de Q0: `V = (2/3) x Q0 x T_efetivo`.
- A area do furo nunca pode exceder a secao do tubo.

## Idioma

Interface, mensagens, commits e documentacao em portugues do Brasil.
Valores numericos no formato BR: virgula decimal e ponto de milhar.
