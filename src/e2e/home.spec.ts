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

  // テーマの初期化を待つ（ローカルストレージが設定されるまで）
  await page.waitForFunction(() => {
    return localStorage.getItem("theme") !== null;
  });

  // 初期状態を確認（システム設定やローカルストレージに基づく）
  const initialTheme = await page.evaluate(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 現在のテーマに基づいてテストを実行
  if (initialTheme === "dark") {
    // 初期状態がダークモードの場合
    await expect(page.locator("html")).toHaveClass(/dark/);

    // ライトモードに切り替え
    await page.getByRole("button").filter({ hasText: "🌙" }).click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    // ダークモードに戻す
    await page.getByRole("button").filter({ hasText: "☀️" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
  } else {
    // 初期状態がライトモードの場合
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    // ダークモードに切り替え
    await page.getByRole("button").filter({ hasText: "☀️" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    // ライトモードに戻す
    await page.getByRole("button").filter({ hasText: "🌙" }).click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  }
});

test("コンタクトフォームでメッセージを送信できる", async ({ page }) => {
  await page.goto("/");

  // Links & Contactセクションまでスクロール
  await page.getByText("Links & Contact").scrollIntoViewIfNeeded();

  // フォームに値を入力
  await page.getByPlaceholder("Your@email.com").fill("test@example.com");
  await page
    .getByPlaceholder(/The message you can send is limited/)
    .fill("Test message");

  // メッセージを送信
  await page.getByRole("button", { name: "Send Message" }).click();

  // アラートを待機して確認
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Message sent");
    await dialog.accept();
  });

  // フォームがリセットされたことを確認
  await expect(page.getByPlaceholder("Your@email.com")).toHaveValue("");
  await expect(
    page.getByPlaceholder(/The message you can send is limited/),
  ).toHaveValue("");
});

test("コンタクトフォームのバリデーションが機能する", async ({ page }) => {
  await page.goto("/");

  // Links & Contactセクションまでスクロール
  await page.getByText("Links & Contact").scrollIntoViewIfNeeded();

  // 無効なメールアドレスでテスト
  await page.getByPlaceholder("Your@email.com").fill("invalid-email");
  await page
    .getByPlaceholder(/The message you can send is limited/)
    .fill("Test message");
  await page.getByRole("button", { name: "Send Message" }).click();

  // バリデーションエラーのアラートを確認
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain(
      "有効なメールアドレスを入力してください",
    );
    await dialog.accept();
  });
});
