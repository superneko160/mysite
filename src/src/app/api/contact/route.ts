import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import type { ContactForm } from "./../../types/ContactForm";

export async function POST(request: NextRequest) {
  const body: ContactForm = await request.json();

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
    const data = `Message sent.\n送信完了\nReply-To:${body.email}`;
    return new Response(JSON.stringify({ body: data }));
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        body: "Failed to send message. Please try again later.\nメッセージが送信できませんでした。数分後に再度お試しください。",
      }),
    );
  }
}
