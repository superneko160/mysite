import { test, expect } from '@playwright/test';

test('トップページが正しく表示される', async ({ page }) => {
  await page.goto('/');
  
  // タイトルの確認
  await expect(page.locator('h1')).toContainText('Sneko');
  
  // セクションの存在確認
  await expect(page.getByText('Overview')).toBeVisible();
  await expect(page.getByText('Skill')).toBeVisible();
  await expect(page.getByText('History')).toBeVisible();
  await expect(page.getByText('Links & Contact')).toBeVisible();
});

test('ダークモード切り替えが機能する', async ({ page }) => {
  await page.goto('/');
  
  // 初期状態（ダークモード）の確認
  await expect(page.locator('html')).toHaveClass(/dark/);
  
  // ダークモードボタンをクリック
  await page.getByRole('button').filter({ hasText: '🌙' }).click();
  
  // ライトモードに切り替わったことを確認
  await expect(page.locator('html')).not.toHaveClass(/dark/);
});
