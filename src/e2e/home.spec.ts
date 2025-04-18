import { test, expect } from "@playwright/test";

test("トップページが正しく表示される", async ({ page }) => {
  await page.goto("/");

  // タイトルの確認
  await expect(page.locator("h1")).toContainText("Sneko");

  // セクションの存在確認
  await expect(page.getByText("Overview")).toBeVisible();
  await expect(page.getByText("Skill")).toBeVisible();
  await expect(page.getByText("History")).toBeVisible();
  await expect(page.getByText("Links & Contact")).toBeVisible();
});

test("ダークモード切り替えが機能する", async ({ page }) => {
  await page.goto("/");

  // 初期状態（ダークモード）の確認
  await expect(page.locator("html")).toHaveClass(/dark/);

  // モードボタンをクリック
  await page.getByRole("button").filter({ hasText: "🌙" }).click();

  // ライトモードに切り替わったことを確認
  await expect(page.locator("html")).not.toHaveClass(/dark/);
});

test("コンタクトフォームでメッセージを送信できる", async ({ page }) => {
  await page.goto("/");

  // Links & Contactセクションまでスクロール
  await page.getByText("Links & Contact").scrollIntoViewIfNeeded();

  // フォームに値を入力
  await page.getByPlaceholder("Your@email.com").fill("test@example.com");
  await page.getByPlaceholder(/The message you can send is limited/).fill("Test message");

  // メッセージを送信
  await page.getByRole("button", { name: "Send Message" }).click();

  // アラートを待機して確認
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Message sent");
    await dialog.accept();
  });

  // フォームがリセットされたことを確認
  await expect(page.getByPlaceholder("Your@email.com")).toHaveValue("");
  await expect(page.getByPlaceholder(/The message you can send is limited/)).toHaveValue("");
});

test("コンタクトフォームのバリデーションが機能する", async ({ page }) => {
  await page.goto("/");

  // Links & Contactセクションまでスクロール
  await page.getByText("Links & Contact").scrollIntoViewIfNeeded();

  // 無効なメールアドレスでテスト
  await page.getByPlaceholder("Your@email.com").fill("invalid-email");
  await page.getByPlaceholder(/The message you can send is limited/).fill("Test message");
  await page.getByRole("button", { name: "Send Message" }).click();

  // バリデーションエラーのアラートを確認
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("有効なメールアドレスを入力してください");
    await dialog.accept();
  });
});
