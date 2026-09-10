window.SABESP_APP_INFO = Object.freeze({
  version: '5.11.0',
  displayVersion: 'v5.11',
  releaseNotes: [
    {
      version: '5.11.0',
      displayVersion: 'v5.11',
      summary: 'Atualizacao do endereco da unidade OVMS no rodape: Av. Heitor Villa Lobos, 1229 - Vila Ema - CEP 12243-260 - Sao Jose dos Campos - SP, com telefone 55(12)3904-3202.'
    },
    {
      version: '5.10.0',
      displayVersion: 'v5.10',
      summary: 'Secao Plena: o campo de tempo passa a representar o vazamento ate o fechamento dos registros, limitando o periodo faturavel quando a ocorrencia se estende alem da interrupcao. A pressao decai de P0 a zero ao longo do vazamento, resultando em vazao media de 2/3 de Q0: V = (2/3) x Q0 x T_efetivo. Reverte o modelo de regime permanente introduzido na v5.9, que partia de leitura incorreta do campo.'
    },
    {
      version: '5.8.0',
      displayVersion: 'v5.8',
      summary: 'Atualizacao das bases de servicos e materiais para Sabesp SPO jun/2026: 3.514 servicos e 4.333 insumos.'
    },
    {
      version: '5.7.0',
      displayVersion: 'v5.7',
      summary: 'Padronizacao do formato BR (virgula decimal, ponto milhar) em todos os valores exibidos; BDI padrao alterado de 28% para 20%; rotulo do banco de precos passa a Marco/2026.'
    },
    {
      version: '5.6.0',
      displayVersion: 'v5.6',
      summary: 'Atualizacao das bases de servicos e materiais para Sabesp SPO mar/2026, com substituicao integral de servicos.js e materiais.js a partir do arquivo SPO_atualizado_mar_o2026.'
    },
    {
      version: '5.5.0',
      displayVersion: 'v5.5',
      summary: 'Secao Plena: Q0 agora calculado pela equacao de orificio (Cd=0,82) com pressao real da rede informada pelo usuario, substituindo tabela com valores incorretos. Formula completa: V = (2/3) x Cd x A x sqrt(2gH) x T_manobra.'
    },
    {
      version: '5.4.0',
      displayVersion: 'v5.4',
      summary: 'Secao Plena: calculo de agua perdida agora usa modelo de decaimento linear de pressao: V = (2/3) x Q0 x T_manobra, com campo Tempo ate fechamento da rede informado pelo usuario. Resultado fisicamente mais realista para tubos rompidos.'
    },
    {
      version: '5.3.0',
      displayVersion: 'v5.3',
      summary: 'Destaque visual de campos editaveis: fundo azul-claro e borda inferior nos inputs de tabela, BDI, nomes/cargos dos responsaveis e campos do rodape (contenteditable). Todos os destaques sao suprimidos na impressao.'
    },
    {
      version: '5.2.0',
      displayVersion: 'v5.2',
      summary: 'Versao unica do aplicativo, calculos puros separados, validacoes antes de salvar/imprimir, service worker mais robusto, metadados das bases e testes ampliados.'
    }
  ]
});
