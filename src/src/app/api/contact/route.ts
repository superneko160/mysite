import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST,
    port: 465,
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASSWORD,
    },
  });

  const toHostMailData = {
    to: process.env.TOMAIL,
    subject: "お問い合わせ(mysite)",
    text: `返信先：${body.email}\n${body.message}`,
  };

  try {
    const info = await transporter.sendMail(toHostMailData);
    const data = `送信完了\n返信先:${body.email}\n${body.message}`;
    return new Response(JSON.stringify({ body: data }));
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ body: "Error!\nメッセージが送信できませんでした" }),
    );
  }
}
