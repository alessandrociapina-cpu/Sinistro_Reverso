// Suíte de testes — ativada apenas com ?tests=true na URL
// Exemplo: file:///index.html?tests=true
(function () {
    if (!new URLSearchParams(window.location.search).has('tests')) return;

    let passou = 0, falhou = 0;

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

    // calcularVazaoOrificio
    // Furo circular Cd=0.61, diam=2cm → área=π*(0.01)²≈3.1416e-4 m², pressão=10mca
    // Q = 0.61 × 3.1416e-4 × √(2×9.81×10) × 1000 ≈ 0.848 L/s
    const areaCirc = Math.PI * Math.pow(0.01, 2);
    const q = calcularVazaoOrificio(0.61, areaCirc, 10);
    assert(Math.abs(q - 0.848) < 0.01,
        `calcularVazaoOrificio: Cd=0.61 d=2cm p=10mca ≈ 0.848 L/s (obtido ${q.toFixed(3)})`);
    assert(calcularVazaoOrificio(0, 1, 10) === 0,    'calcularVazaoOrificio: Cd=0 → 0');
    assert(calcularVazaoOrificio(0.61, 0, 10) === 0, 'calcularVazaoOrificio: área=0 → 0');
    assert(calcularVazaoOrificio(0.61, 1, 0) === 0,  'calcularVazaoOrificio: pressão=0 → 0');
    assert(calcularVazaoOrificio(0.61, 1, -5) === 0, 'calcularVazaoOrificio: pressão negativa → 0');

    console.log(
        `%c── ${passou} passou  ${falhou} falhou ──`,
        falhou ? 'color: red; font-weight: bold' : 'color: green; font-weight: bold'
    );
})();
