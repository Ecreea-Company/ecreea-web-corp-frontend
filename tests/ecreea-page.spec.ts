import { test, expect } from '@playwright/test'

test('Botones funcionando en página Ecreea', async ({ page }) => {
  await page.goto('http://localhost:3000/ecreea')
  await page.getByRole('link', { name: 'Más Información' }).first().click()
  await page.getByRole('link', { name: 'Más Información' }).nth(1).click()
  await page.getByRole('link', { name: 'El Trabajo en Ecreea' }).click()
  await page.getByRole('link', { name: 'Da el primer paso' }).click()
  await page.getByRole('link', { name: 'Ven a descubrirte' }).click()
  await page.getByRole('link', { name: 'Aprende con nosotros' }).click()
  await page.getByRole('link', { name: 'Da el primer paso' }).click()
  await page.getByRole('link', { name: 'Aprende con nosotros' }).nth(1).click()
})
