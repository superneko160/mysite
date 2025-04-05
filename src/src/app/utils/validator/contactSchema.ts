import * as v from "valibot";

export const emailSchema = v.pipe(
  v.string(),
  v.email("Eメールアドレスの形式ではありません"),
);

export const messageSchema = v.pipe(
  v.string(),
  v.minLength(1, "メッセージを入力してください"),
  v.maxLength(200, "メッセージは200文字以内で入力してください"),
);
