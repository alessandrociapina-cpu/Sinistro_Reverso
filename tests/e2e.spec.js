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
  await expect(page.locator('.version-badge')).toContainText('v5.2');
  await expect(page.locator('.changelog-box li').first()).toContainText('v5.2');
});

test('calcula agua perdida por area de furo circular', async ({ page }) => {
  await page.locator('#data-ini').fill('2026-01-01');
  await page.locator('#hora-ini').fill('08:00');
  await page.locator('#data-fim').fill('2026-01-01');
  await page.locator('#hora-fim').fill('09:00');

  await expect(page.locator('#calc-segundos')).toHaveText('3600');
  await expect(page.locator('#calc-vazao')).toHaveText('2.684');
  await expect(page.locator('#calc-vol')).toHaveText('9.66');
  await expect(page.locator('#calc-total-agua')).toHaveText('198.27');
  await expect(page.locator('#total-final')).toHaveText('198.27');
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
