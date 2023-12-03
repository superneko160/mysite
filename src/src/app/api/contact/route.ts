import { NextRequest } from "next/server";

// SendMessageボタン押下時、POST送信されてきた値を処理し、結果をJSON形式で返す
export async function POST(request: NextRequest) {
  const body = await request.json();
  const data = `送信完了\n返信先:${body.email}\n${body.message}`;
  return new Response(JSON.stringify({ body: data }));
}
