# Sinistro Reverso

Aplicacao web estatica para montar planilhas orcamentarias de recuperacao de danos causados por concessionarias ou terceiros, usando bases de servicos e materiais da Sabesp SPO atualizadas para jan/2026.

## Como usar

Abra `index.html` em um navegador moderno ou publique a pasta em um servidor estatico. A tela permite preencher dados da ocorrencia, calcular agua perdida, adicionar servicos e materiais, aplicar BDI, salvar um projeto em JSON e imprimir ou gerar PDF.

O projeto tambem funciona como PWA quando servido por HTTP/HTTPS, usando `manifest.json` e `sw.js` para cache local.

## Arquivos principais

- `index.html`: estrutura da planilha e campos de entrada.
- `styles.css`: layout de tela, responsivo mobile e regras de impressao A4.
- `app.js`: regras de calculo, estado, autocomplete, salvar/carregar projeto e PWA.
- `servicos.js`: base de precos de servicos.
- `materiais.js`: base de precos de materiais.
- `tests.js`: testes de funcoes puras executados no navegador com `?tests=true`.
- `scripts/validate-data.mjs`: validacao automatica das bases de precos.
- `tests/e2e.spec.js`: testes de navegador com Playwright.

## Premissas de calculo

- `VALOR_UFESP`: valor usado para converter o total final em UFESPs. Deve ser atualizado anualmente conforme publicacao oficial do Estado de Sao Paulo.
- `PRECO_M3_AGUA_PADRAO`: valor padrao de agua por metro cubico. O campo e editavel na tela e deve seguir a tabela tarifaria aplicavel.
- `GRAVIDADE`: 9,81 m/s2.
- Vazao por area de furo: `Q = Cd * A * sqrt(2 * g * h)`, convertida para L/s.
- Vazao por secao plena: usa tabela fixa em `vazoesSecaoPlena` para diametros padrao.
- BDI: aplicado sobre o subtotal de servicos e materiais.

Sempre valide as fontes tecnicas e economicas antes de usar o resultado como documento oficial de cobranca.

## Desenvolvimento

Instale dependencias e rode a validacao completa:

```bash
npm install
npm test
```

Rodar apenas a validacao das bases:

```bash
npm run validate:data
```

Rodar apenas os testes de navegador:

```bash
npm run test:browser
```

Rodar os testes simples no proprio navegador:

```text
index.html?tests=true
```

## Atualizacao das bases

Ao atualizar `servicos.js` ou `materiais.js`, mantenha o formato de array JavaScript global (`baseServicos` e `baseMateriais`) ou ajuste `app.js` e `scripts/validate-data.mjs` em conjunto.

Antes de publicar uma nova base, rode `npm run validate:data` para verificar campos obrigatorios, precos invalidos e duplicidades exatas.

## Publicacao

Por ser uma aplicacao estatica, pode ser publicada em GitHub Pages ou qualquer servidor de arquivos. Para validar PWA e service worker, teste via `http://localhost` ou HTTPS; service workers nao funcionam de forma confiavel abrindo o arquivo diretamente via `file://`.
