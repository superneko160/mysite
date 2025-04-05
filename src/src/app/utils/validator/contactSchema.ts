import * as v from "valibot";

export const emailSchema = v.pipe(
  v.string(),
  v.minLength(1, "メールアドレスを入力してください"),
  v.maxLength(254, "メールアドレスが長すぎます"), // RFC 5321による制限
  v.email("有効なメールアドレスを入力してください"),
);

export const messageSchema = v.pipe(
  v.string(),
  v.minLength(1, "メッセージを入力してください"),
  v.maxLength(200, "メッセージは200文字以内で入力してください"),
);
