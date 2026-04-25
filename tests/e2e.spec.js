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

test('calcula agua perdida por area de furo circular', async ({ page }) => {
  await page.locator('#data-ini').fill('2026-01-01');
  await page.locator('#hora-ini').fill('08:00');
  await page.locator('#data-fim').fill('2026-01-01');
  await page.locator('#hora-fim').fill('09:00');

  await expect(page.locator('#calc-segundos')).toHaveText('3600');
  await expect(page.locator('#calc-vazao')).toHaveText('0.848');
  await expect(page.locator('#calc-vol')).toHaveText('3.05');
  await expect(page.locator('#calc-total-agua')).toHaveText('62.66');
  await expect(page.locator('#total-final')).toHaveText('62.66');
});

test('bloqueia salvar e imprimir quando secao plena usa diametro sem tabela', async ({ page }) => {
  await page.locator('#tipo-secao').selectOption('Seção Plena');
  await page.locator('#diametro-dano').selectOption('Outros');

  await expect(page.locator('#aviso-secao-plena')).toContainText('Diâmetro sem vazão tabelada.');
  await expect(page.locator('#btn-salvar-proj')).toBeDisabled();
  await expect(page.locator('#btn-imprimir-proj')).toBeDisabled();
});

test('mostra campo livre quando causador e Outros', async ({ page }) => {
  await page.locator('#causador').selectOption('Outros');
  await expect(page.locator('#causador-outros')).toBeVisible();

  await page.locator('#causador').selectOption('COMGAS');
  await expect(page.locator('#causador-outros')).toBeHidden();
});
