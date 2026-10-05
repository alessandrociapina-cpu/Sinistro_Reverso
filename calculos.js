window.SabespCalculos = Object.freeze({
  GRAVIDADE: 9.81,

  // Velocidade maxima plausivel de escoamento em tubulacao rompida (m/s).
  // Redes de distribuicao sao projetadas para 0,6 a 3,0 m/s. Em ruptura, com a
  // demanda de jusante curto-circuitada, admite-se o dobro do limite de projeto.
  // Serve de teto quando a distancia ate a fonte nao e informada.
  VELOCIDADE_MAX_RUPTURA: 6,

  // Coeficiente C de Hazen-Williams por material, em valores representativos de
  // rede em servico (nao de tubo novo). Usado para limitar a vazao pela
  // capacidade hidraulica real da tubulacao que alimenta o vazamento.
  COEF_HAZEN_WILLIAMS: Object.freeze({
    pvc: 140,
    pead: 140,
    fofo: 100,
    defofo: 130,
    fibra: 135,
    concreto: 120,
    ceramica: 110
  }),
  COEF_HAZEN_WILLIAMS_PADRAO: 120,

  obterCoefHazenWilliams(material) {
    const chave = String(material || '')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .trim().toLowerCase();
    return this.COEF_HAZEN_WILLIAMS[chave] || this.COEF_HAZEN_WILLIAMS_PADRAO;
  },

  calcularVazaoOrificio(cd, areaM2, pressaoMca) {
    if (pressaoMca <= 0 || areaM2 <= 0 || cd <= 0) return 0;
    return (cd * areaM2 * Math.sqrt(2 * this.GRAVIDADE * pressaoMca)) * 1000;
  },

  // Area da secao transversal do tubo (m2).
  calcularAreaTubo(diamNominalMm) {
    const rM = Math.max(0, diamNominalMm) / 1000 / 2;
    return Math.PI * rM * rM;
  },

  // Expansao da area do vazamento com a pressao (conceito FAVAD).
  // Fissuras em tubos flexiveis (PVC, PEAD) abrem sob pressao, de modo que a
  // area medida com o tubo despressurizado e um limite inferior:
  //   A(H) = A0 · (1 + k·H/10)      k = expansao relativa por 10 mca
  // k = 0 reproduz o orificio rigido classico (expoente de vazamento 0,5).
  calcularAreaExpandida(areaM2, pressaoMca, expansaoPor10Mca) {
    const a0 = Math.max(0, areaM2);
    const h = Math.max(0, pressaoMca);
    const k = Math.max(0, expansaoPor10Mca || 0);
    if (a0 <= 0) return 0;
    return a0 * (1 + k * (h / 10));
  },

  // Vazao maxima que a tubulacao consegue entregar ao vazamento (L/s).
  //
  // A equacao do orificio com a carga estatica plena assume que a rede entrega
  // qualquer vazao, o que e falso: a perda de carga ao longo do trecho que
  // alimenta a ruptura limita o escoamento. Sem esse limite, uma ruptura de
  // DN 300 a 20 mca resultaria em 1.148 L/s (16 m/s de velocidade), vazao que
  // exigiria ~540 m de perda de carga por quilometro.
  //
  // Dois limitantes, prevalecendo o menor:
  //   1) Teto de velocidade:  Q = A · V_MAX
  //   2) Atrito (Hazen-Williams), quando a distancia a fonte e conhecida:
  //        H = 10,65 · Q^1,852 · L / (C^1,852 · D^4,87)
  //      resolvida para Q:
  //        Q = [H · C^1,852 · D^4,87 / (10,65 · L)]^(1/1,852)
  //
  // Retorna { vazaoLs, limitante } com limitante em 'velocidade' ou 'atrito'.
  calcularVazaoMaximaRede(diamNominalMm, pressaoMca, distanciaFonteM, material) {
    const dM = Math.max(0, diamNominalMm) / 1000;
    const areaM2 = this.calcularAreaTubo(diamNominalMm);
    if (dM <= 0 || areaM2 <= 0) return { vazaoLs: 0, limitante: 'velocidade' };

    const vazaoTetoLs = areaM2 * this.VELOCIDADE_MAX_RUPTURA * 1000;

    const h = Math.max(0, pressaoMca);
    const l = Math.max(0, distanciaFonteM || 0);
    if (l <= 0 || h <= 0) return { vazaoLs: vazaoTetoLs, limitante: 'velocidade' };

    const c = this.obterCoefHazenWilliams(material);
    const numerador = h * Math.pow(c, 1.852) * Math.pow(dM, 4.87);
    const vazaoAtritoM3s = Math.pow(numerador / (10.65 * l), 1 / 1.852);
    const vazaoAtritoLs = vazaoAtritoM3s * 1000;

    return vazaoAtritoLs < vazaoTetoLs
      ? { vazaoLs: vazaoAtritoLs, limitante: 'atrito' }
      : { vazaoLs: vazaoTetoLs, limitante: 'velocidade' };
  },

  // Seção Plena: Cd = 0,82 (ruptura limpa de tubo)
  calcularVazaoSecaoPlena(diamNominalMm, pressaoMca) {
    const areaM2 = this.calcularAreaTubo(diamNominalMm);
    return this.calcularVazaoOrificio(0.82, areaM2, pressaoMca);
  },

  // Tempo efetivo de vazamento (segundos).
  // O vazamento cessa quando os registros sao fechados e a rede local e
  // isolada. Esse instante limita o periodo faturavel: mesmo que a ocorrencia
  // (abertura ate encerramento do servico) se estenda por mais tempo, so ha
  // perda de agua ate o fechamento.
  calcularTempoEfetivoVazamento(totalIncidenteS, tempoFechamentoS) {
    const tTotal = Math.max(0, totalIncidenteS);
    const tFechamento = Math.max(0, tempoFechamentoS);
    if (tFechamento <= 0) return tTotal;
    return Math.min(tTotal, tFechamento);
  },

  // Decaimento linear de pressao ao longo do vazamento.
  // Rompida a secao plena, a pressao no ponto nao se mantem em P0: cai
  // progressivamente ate o fechamento dos registros.
  //   P(t) = P0·(1 – t/T)         com T = tempo efetivo de vazamento
  //   Q(t) = Cd·A·√(2g·P(t)) = Q0·√(1 – t/T)
  //   V    = ∫0..T Q(t) dt = (2/3)·Q0·T        (litros)
  // A vazao media resulta 2/3 de Q0 — nao a vazao inicial de pico.
  calcularVolumeDecaimentoLinear(vazaoInicialLs, tempoVazamentoS) {
    const q0 = Math.max(0, vazaoInicialLs);
    const t = Math.max(0, tempoVazamentoS);
    if (q0 <= 0 || t <= 0) return 0;
    return (2 / 3) * q0 * t;
  },

  // Volume perdido em Secao Plena (litros): decaimento de pressao aplicado
  // sobre o tempo efetivo de vazamento (limitado pelo fechamento da rede).
  calcularVolumeSecaoPlena(vazaoInicialLs, tempoFechamentoS, totalIncidenteS) {
    const tEfetivo = this.calcularTempoEfetivoVazamento(totalIncidenteS, tempoFechamentoS);
    return this.calcularVolumeDecaimentoLinear(vazaoInicialLs, tEfetivo);
  },

  // ---------------------------------------------------------------------------
  // Avaliacao completa da perda de agua
  // ---------------------------------------------------------------------------

  // Seção Plena (tubo rompido). Em rede malhada a ruptura e alimentada pelos
  // dois lados do tubo seccionado; em rede ramificada (ponta seca), por um so.
  // O teto de capacidade incide por lado, pois cada extremidade escoa pelo seu
  // proprio trecho, e so depois a vazao e multiplicada pelo numero de lados.
  avaliarSecaoPlena(params) {
    const {
      diamNominalMm = 0,
      pressaoMca = 0,
      tempoFechamentoS = 0,
      totalIncidenteS = 0,
      distanciaFonteM = 0,
      material = '',
      lados = 1
    } = params || {};

    const areaTuboM2 = this.calcularAreaTubo(diamNominalMm);
    const vazaoOrificioLs = this.calcularVazaoSecaoPlena(diamNominalMm, pressaoMca);
    const limite = this.calcularVazaoMaximaRede(diamNominalMm, pressaoMca, distanciaFonteM, material);

    const capacidadeAtiva = limite.vazaoLs > 0 && limite.vazaoLs < vazaoOrificioLs;
    const vazaoPorLadoLs = capacidadeAtiva ? limite.vazaoLs : vazaoOrificioLs;
    const numLados = lados === 2 ? 2 : 1;
    const vazaoInicialLs = vazaoPorLadoLs * numLados;

    const tempoEfetivoS = this.calcularTempoEfetivoVazamento(totalIncidenteS, tempoFechamentoS);
    const volumeLitros = this.calcularVolumeDecaimentoLinear(vazaoInicialLs, tempoEfetivoS);

    return {
      areaM2: areaTuboM2,
      vazaoOrificioLs,
      vazaoMaxRedeLs: limite.vazaoLs,
      limitante: capacidadeAtiva ? limite.limitante : 'orificio',
      capacidadeAtiva,
      lados: numLados,
      vazaoInicialLs,
      vazaoMediaLs: tempoEfetivoS > 0 ? volumeLitros / tempoEfetivoS : 0,
      tempoEfetivoS,
      tempoLimitado: tempoEfetivoS < Math.max(0, totalIncidenteS),
      volumeM3: volumeLitros / 1000
    };
  },

  // Área do Furo (vazamento localizado). A pressao da rede se mantem, pois a
  // vazao do furo e pequena frente a capacidade de alimentacao — por isso aqui
  // nao se aplica decaimento, apenas o limite de tempo e o de capacidade.
  // A area do furo nunca pode exceder a secao do tubo: alem disso o dano
  // deixa de ser localizado e deve ser classificado como Secao Plena.
  avaliarAreaFuro(params) {
    const {
      cd = 0.61,
      areaInformadaM2 = 0,
      diamNominalMm = 0,
      pressaoMca = 0,
      tempoFechamentoS = 0,
      totalIncidenteS = 0,
      distanciaFonteM = 0,
      material = '',
      expansaoPor10Mca = 0
    } = params || {};

    const areaTuboM2 = this.calcularAreaTubo(diamNominalMm);
    const excedeSecao = areaTuboM2 > 0 && areaInformadaM2 > areaTuboM2;
    const areaEfetivaM2 = excedeSecao ? areaTuboM2 : Math.max(0, areaInformadaM2);
    const areaExpandidaM2 = this.calcularAreaExpandida(areaEfetivaM2, pressaoMca, expansaoPor10Mca);

    const vazaoOrificioLs = this.calcularVazaoOrificio(cd, areaExpandidaM2, pressaoMca);
    const limite = this.calcularVazaoMaximaRede(diamNominalMm, pressaoMca, distanciaFonteM, material);

    const capacidadeAtiva = limite.vazaoLs > 0 && limite.vazaoLs < vazaoOrificioLs;
    const vazaoLs = capacidadeAtiva ? limite.vazaoLs : vazaoOrificioLs;

    const tempoEfetivoS = this.calcularTempoEfetivoVazamento(totalIncidenteS, tempoFechamentoS);
    const volumeM3 = (vazaoLs * tempoEfetivoS) / 1000;

    return {
      areaInformadaM2,
      areaEfetivaM2,
      areaExpandidaM2,
      areaTuboM2,
      excedeSecao,
      vazaoOrificioLs,
      vazaoMaxRedeLs: limite.vazaoLs,
      limitante: capacidadeAtiva ? limite.limitante : 'orificio',
      capacidadeAtiva,
      vazaoLs,
      tempoEfetivoS,
      tempoLimitado: tempoEfetivoS < Math.max(0, totalIncidenteS),
      volumeM3
    };
  },

  calcularTempoSegundos(dataInicio, horaInicio, dataFim, horaFim) {
    if (!dataInicio || !horaInicio || !dataFim || !horaFim) {
      return { segundos: 0, valido: false, motivo: 'periodo-incompleto' };
    }
    const inicio = new Date(`${dataInicio}T${horaInicio}`);
    const fim = new Date(`${dataFim}T${horaFim}`);
    if (Number.isNaN(inicio.getTime()) || Number.isNaN(fim.getTime())) {
      return { segundos: 0, valido: false, motivo: 'periodo-invalido' };
    }
    const diferencaSegundos = (fim - inicio) / 1000;
    if (diferencaSegundos < 0) {
      return { segundos: 0, valido: false, motivo: 'periodo-negativo' };
    }
    return { segundos: diferencaSegundos, valido: true, motivo: '' };
  },

  calcularPerdaAgua(vazaoLs, segundos, precoM3) {
    const volumeM3 = (Math.max(0, vazaoLs) * Math.max(0, segundos)) / 1000;
    const total = volumeM3 * Math.max(0, precoM3);
    return { volumeM3, total };
  },

  // ---------------------------------------------------------------------------
  // Valores com vigencia legal
  // ---------------------------------------------------------------------------
  //
  // A UFESP e fixada anualmente pela SEFAZ-SP e a tarifa de agua pela ARSESP.
  // Um laudo deve usar o valor vigente NA DATA DA OCORRENCIA, e nao o valor
  // atual: reemitir um caso antigo com a UFESP de hoje produz valor incorreto.
  //
  // ATENCAO: esta tabela nasce vazia de proposito. Os valores oficiais por
  // exercicio devem ser preenchidos pela equipe a partir da publicacao da
  // SEFAZ-SP — nao devem ser estimados. Enquanto o ano da ocorrencia nao
  // constar aqui, obterUfesp devolve oficial=false e a interface alerta o
  // usuario para conferir a vigencia antes de emitir o documento.
  //
  // Formato:  { 2024: 35.36, 2025: 00.00, 2026: 00.00 }
  TABELA_UFESP: Object.freeze({}),

  // Valor de referencia usado enquanto o exercicio nao estiver na tabela.
  // Corresponde ao valor que ja vinha embutido no aplicativo.
  UFESP_REFERENCIA: 35.36,

  obterUfesp(dataOcorrencia) {
    const ano = this.extrairAno(dataOcorrencia);
    const oficial = ano !== null && Object.prototype.hasOwnProperty.call(this.TABELA_UFESP, ano);
    return {
      ano,
      valor: oficial ? this.TABELA_UFESP[ano] : this.UFESP_REFERENCIA,
      oficial
    };
  },

  extrairAno(data) {
    const texto = String(data || '').trim();
    const casamento = texto.match(/^(\d{4})-\d{2}-\d{2}/);
    if (!casamento) return null;
    const ano = Number(casamento[1]);
    return Number.isFinite(ano) ? ano : null;
  }
});
