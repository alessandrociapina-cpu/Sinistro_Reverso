import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/?tests=true');
});

test('browser smoke tests exposed by tests.js pass', async ({ page }) => {
  await page.waitForFunction(() => window.__SABESP_TEST_RESULTS__?.done === true);

  const results = await page.evaluate(() => window.__SABESP_TEST_RESULTS__);
  expect(results.falhou).toBe(0);
  expect(results.passou).toBeGreaterThan(0);
});

test('exibe versao e historico atuais', async ({ page }) => {
  const versaoExibida = await page.evaluate(() => window.SABESP_APP_INFO.displayVersion);
  await expect(page.locator('.version-badge')).toContainText(versaoExibida);
  await expect(page.locator('.changelog-box li').first()).toContainText(versaoExibida);
});

test('calcula agua perdida por area de furo circular', async ({ page }) => {
  // Furo de 2 cm num tubo DN 100: pequeno frente a secao (3,1 de 78,5 cm2),
  // logo a capacidade da rede nao interfere e vale o orificio puro.
  //   Q = 0,61 x 3,1416e-4 x sqrt(2 x 9,81 x 10) x 1000 = 2,684 L/s
  await page.locator('#diametro-dano').selectOption('100');
  await page.locator('#tempo-manobra').fill('60');
  await page.locator('#data-ini').fill('2026-01-01');
  await page.locator('#hora-ini').fill('08:00');
  await page.locator('#data-fim').fill('2026-01-01');
  await page.locator('#hora-fim').fill('09:00');

  await expect(page.locator('#calc-segundos')).toHaveText('3600');
  await expect(page.locator('#calc-vazao')).toHaveText('2,684');
  await expect(page.locator('#calc-vol')).toHaveText('9,66');
  await expect(page.locator('#calc-total-agua')).toHaveText('198,29');
  await expect(page.locator('#total-final')).toHaveText('198,29');
  await expect(page.locator('#memoria-calculo')).not.toContainText('limitada pela capacidade');
});

test('bloqueia salvar e imprimir quando secao plena usa diametro invalido', async ({ page }) => {
  await page.locator('#tipo-secao').selectOption('Seção Plena');
  await page.locator('#diametro-dano').selectOption('Outros');

  await expect(page.locator('#aviso-secao-plena')).toContainText('Diâmetro inválido.');
  await expect(page.locator('#btn-salvar-proj')).toBeDisabled();
  await expect(page.locator('#btn-imprimir-proj')).toBeDisabled();
});

async function preencherSecaoPlena(page, { minFechamento = '60', fim = '11:23' } = {}) {
  await page.locator('#tipo-secao').selectOption('Seção Plena');
  await page.locator('#diametro-dano').selectOption('50');
  await page.locator('#pressao').fill('10');
  await page.locator('#tempo-manobra').fill(minFechamento);
  await page.locator('#data-ini').fill('2026-01-01');
  await page.locator('#hora-ini').fill('08:00');
  await page.locator('#data-fim').fill('2026-01-01');
  await page.locator('#hora-fim').fill(fim);
}

test('secao plena limita o faturamento ao fechamento dos registros', async ({ page }) => {
  // DN 50 mm @ 10 mca. O orificio puro indicaria 22,552 L/s (velocidade de
  // 11,5 m/s), mas a capacidade da rede limita a 6 m/s -> 11,781 L/s.
  // Ocorrencia de 12180 s (08:00 -> 11:23) com fechamento em 60 min:
  //   V = (2/3) x 11,781 L/s x 3600 s = 28,274 m3
  await preencherSecaoPlena(page);

  await expect(page.locator('#calc-segundos')).toHaveText('12180');
  await expect(page.locator('#calc-vazao')).toHaveText('11,781');
  await expect(page.locator('#calc-vol')).toHaveText('28,27');
  // A memoria de calculo registra o limite de tempo e o de capacidade
  await expect(page.locator('#memoria-calculo')).toContainText('3.600 s');
  await expect(page.locator('#memoria-calculo')).toContainText('limitado pelo fechamento');
  await expect(page.locator('#memoria-calculo')).toContainText("teto de velocidade de 6 m/s");
  await expect(page.locator('#memoria-calculo')).toContainText('22,552');
  // Vazao media = 2/3 de Q0, refletindo o decaimento de pressao
  await expect(page.locator('#memoria-calculo')).toContainText('7,854');
});

test('secao plena sem limitacao usa toda a duracao da ocorrencia', async ({ page }) => {
  // Ocorrencia de 1800 s menor que o tempo de fechamento (60 min):
  //   V = (2/3) x 11,781 L/s x 1800 s = 14,137 m3
  await preencherSecaoPlena(page, { fim: '08:30' });

  await expect(page.locator('#calc-vol')).toHaveText('14,14');
  await expect(page.locator('#memoria-calculo')).not.toContainText('limitado pelo fechamento');
});

test('secao plena dobra a vazao quando alimentada pelos dois lados', async ({ page }) => {
  await preencherSecaoPlena(page);
  await expect(page.locator('#calc-vazao')).toHaveText('11,781');

  await page.locator('#lados-ruptura').selectOption('2');
  await expect(page.locator('#calc-vazao')).toHaveText('23,562');
  await expect(page.locator('#calc-vol')).toHaveText('56,55');
  await expect(page.locator('#memoria-calculo')).toContainText('dois lados');
});

test('distancia ate a fonte aplica perda de carga e reduz a vazao', async ({ page }) => {
  await preencherSecaoPlena(page);
  const semDistancia = await page.locator('#calc-vol').innerText();

  await page.locator('#material-dano').selectOption('Fofo');
  await page.locator('#distancia-fonte').fill('1500');
  await expect(page.locator('#memoria-calculo')).toContainText('Hazen-Williams');

  const comDistancia = await page.locator('#calc-vol').innerText();
  expect(Number(comDistancia.replace(/\./g, '').replace(',', '.')))
    .toBeLessThan(Number(semDistancia.replace(/\./g, '').replace(',', '.')));
});

test('area do furo tem o periodo limitado pelo fechamento dos registros', async ({ page }) => {
  // Furo circular de 2 cm, DN 100, 10 mca, ocorrencia de 6 h mas fechamento
  // em 1 h: apenas 3600 s sao faturaveis.
  await page.locator('#tipo-secao').selectOption('Área do Furo');
  await page.locator('#formato-dano').selectOption('circular');
  await page.locator('#diametro-dano').selectOption('100');
  await page.locator('#diametro-furo').fill('2');
  await page.locator('#pressao').fill('10');
  await page.locator('#data-ini').fill('2026-01-01');
  await page.locator('#hora-ini').fill('08:00');
  await page.locator('#data-fim').fill('2026-01-01');
  await page.locator('#hora-fim').fill('14:00');

  await page.locator('#tempo-manobra').fill('360');
  const semLimite = await page.locator('#calc-vol').innerText();

  await page.locator('#tempo-manobra').fill('60');
  await expect(page.locator('#memoria-calculo')).toContainText('limitado pelo fechamento');
  const comLimite = await page.locator('#calc-vol').innerText();

  expect(Number(comLimite.replace(/\./g, '').replace(',', '.')))
    .toBeCloseTo(Number(semLimite.replace(/\./g, '').replace(',', '.')) / 6, 1);
});

test('area do furo nao pode exceder a secao do tubo', async ({ page }) => {
  // Furo circular de 30 cm declarado num tubo DN 50: 36x a secao.
  await page.locator('#tipo-secao').selectOption('Área do Furo');
  await page.locator('#formato-dano').selectOption('circular');
  await page.locator('#diametro-dano').selectOption('50');
  await page.locator('#diametro-furo').fill('30');
  await page.locator('#pressao').fill('20');
  await page.locator('#data-ini').fill('2026-01-01');
  await page.locator('#hora-ini').fill('08:00');
  await page.locator('#data-fim').fill('2026-01-01');
  await page.locator('#hora-fim').fill('12:00');

  await expect(page.locator('#memoria-calculo')).toContainText('excede a seção do tubo');
  await expect(page.locator('#memoria-calculo')).toContainText('Seção Plena');
  // Vazao limitada ao teto de 6 m/s sobre a secao do DN 50 = 11,781 L/s
  await expect(page.locator('#calc-vazao')).toHaveText('11,781');
});

test('dano de esgoto nao retem cobranca de agua', async ({ page }) => {
  // Preenche como agua, depois corrige para esgoto e mexe no diametro:
  // a cobranca de agua nao pode reaparecer com a secao oculta.
  await page.locator('#tipo-dano').selectOption('Reparo de Rede de Água');
  await page.locator('#data-ini').fill('2026-01-01');
  await page.locator('#hora-ini').fill('08:00');
  await page.locator('#data-fim').fill('2026-01-01');
  await page.locator('#hora-fim').fill('12:00');
  await page.locator('#pressao').fill('20');
  await expect(page.locator('#subtotal-1')).not.toHaveText('0,00');

  await page.locator('#tipo-dano').selectOption('Reparo de Rede de Esgoto');
  await expect(page.locator('#secao-agua')).toBeHidden();
  await expect(page.locator('#subtotal-1')).toHaveText('0,00');

  await page.locator('#diametro-dano').selectOption('300');
  await expect(page.locator('#subtotal-1')).toHaveText('0,00');
  await expect(page.locator('#total-final')).toHaveText('0,00');
});

test('bloqueia pressao fora da faixa plausivel', async ({ page }) => {
  await page.locator('#sef').fill('123/2026');
  await page.locator('#endereco-local').fill('Rua Teste, 100');
  await page.locator('#os').fill('999');
  await page.locator('#data-dano').fill('2026-01-01');
  await page.locator('#hora-dano').fill('08:00');
  await preencherSecaoPlena(page);
  await page.locator('#pressao').fill('1000');

  let mensagem = '';
  page.on('dialog', async dialog => { mensagem = dialog.message(); await dialog.dismiss(); });
  await page.locator('#btn-salvar-proj').click();
  expect(mensagem).toContain('excede o limite plausivel');
});

test('mostra campo livre quando causador e Outros', async ({ page }) => {
  await page.locator('#causador').selectOption('Outros');
  await expect(page.locator('#causador-outros')).toBeVisible();

  await page.locator('#causador').selectOption('COMGAS');
  await expect(page.locator('#causador-outros')).toBeHidden();
});

test('bloqueia salvar documento com campos obrigatorios ausentes', async ({ page }) => {
  let mensagem = '';
  page.on('dialog', async dialog => {
    mensagem = dialog.message();
    await dialog.dismiss();
  });

  await page.locator('#btn-salvar-proj').click();

  expect(mensagem).toContain('Antes de salvar o projeto');
  expect(mensagem).toContain('Identificacao');
  expect(mensagem).toContain('OS');
});
