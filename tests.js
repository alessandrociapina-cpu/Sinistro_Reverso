// Suíte de testes — ativada apenas com ?tests=true na URL
// Exemplo: file:///index.html?tests=true
(function () {
    if (!new URLSearchParams(window.location.search).has('tests')) return;

    let passou = 0, falhou = 0;
    window.__SABESP_TEST_RESULTS__ = { passou, falhou, done: false };

    function registrarResultado() {
        window.__SABESP_TEST_RESULTS__ = { passou, falhou, done: true };
    }

    function assert(condicao, mensagem) {
        if (condicao) {
            console.log('%c✅ ' + mensagem, 'color: green');
            passou++;
        } else {
            console.error('❌ FALHOU: ' + mensagem);
            falhou++;
        }
    }

    // parseValor
    assert(parseValor('142,94') === 142.94,     'parseValor: vírgula decimal BR');
    assert(parseValor('6.985,91') === 6985.91,  'parseValor: ponto de milhar + vírgula decimal');
    assert(parseValor('') === 0,                'parseValor: string vazia → 0');
    assert(parseValor(null) === 0,              'parseValor: null → 0');
    assert(parseValor('R$ 20,52') === 20.52,    'parseValor: prefixo R$ removido');

    // removerAcentos
    assert(removerAcentos('Válvula') === 'valvula', 'removerAcentos: acento e maiúscula');
    assert(removerAcentos('') === '',               'removerAcentos: string vazia');
    assert(removerAcentos(null) === '',             'removerAcentos: null → string vazia');
    assert(removerAcentos('ESGOTO') === 'esgoto',  'removerAcentos: só maiúscula');

    // versionamento
    assert(window.SABESP_APP_INFO?.version === '5.2.0', 'version.js: versão técnica v5.2.0');
    assert(document.querySelector('.version-badge')?.textContent.includes('v5.2'), 'interface: badge exibe v5.2');

    // calcularVazaoOrificio
    // Furo circular Cd=0.61, diam=2cm → área=π*(0.01)²≈3.1416e-4 m², pressão=10mca
    // Q = 0.61 × 3.1416e-4 × √(2×9.81×10) × 1000 ≈ 2.684 L/s
    const areaCirc = Math.PI * Math.pow(0.01, 2);
    const q = calcularVazaoOrificio(0.61, areaCirc, 10);
    assert(Math.abs(q - 2.684) < 0.01,
        `calcularVazaoOrificio: Cd=0.61 d=2cm p=10mca ≈ 2.684 L/s (obtido ${q.toFixed(3)})`);
    assert(calcularVazaoOrificio(0, 1, 10) === 0,    'calcularVazaoOrificio: Cd=0 → 0');
    assert(calcularVazaoOrificio(0.61, 0, 10) === 0, 'calcularVazaoOrificio: área=0 → 0');
    assert(calcularVazaoOrificio(0.61, 1, 0) === 0,  'calcularVazaoOrificio: pressão=0 → 0');
    assert(calcularVazaoOrificio(0.61, 1, -5) === 0, 'calcularVazaoOrificio: pressão negativa → 0');

    const periodoValido = window.SabespCalculos.calcularTempoSegundos('2026-01-01', '08:00', '2026-01-01', '09:00');
    assert(periodoValido.valido && periodoValido.segundos === 3600, 'calcularTempoSegundos: uma hora → 3600s');
    const periodoNegativo = window.SabespCalculos.calcularTempoSegundos('2026-01-01', '09:00', '2026-01-01', '08:00');
    assert(!periodoNegativo.valido && periodoNegativo.segundos === 0, 'calcularTempoSegundos: periodo negativo bloqueado');

    registrarResultado();

    console.log(
        `%c── ${passou} passou  ${falhou} falhou ──`,
        falhou ? 'color: red; font-weight: bold' : 'color: green; font-weight: bold'
    );
})();
