import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// SendMessageボタン押下時、POST送信されてきた値を処理し、結果をJSON形式で返す
export async function POST(request: NextRequest) {
  // リクエスト取得
  const body = await request.json();
  // メール設定
  const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST,
    port: 465,
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASSWORD
    }
  });
  // メールの内容
  const toHostMailData = {
    // from: body.email,
    to: process.env.TOMAIL,
    subject: "お問い合わせ(mysite)",
    text: `返信先：${body.email}\n${body.message}`,
  };
  // メール送信
  try {
    const info = await transporter.sendMail(toHostMailData);
    console.log(info);
    const data = `送信完了\n返信先:${body.email}\n${body.message}`;
    return new Response(
      JSON.stringify({ body: data })
    );
  }
  catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ body: "Error!\nメッセージが送信できませんでした" })
    );
  }
}
