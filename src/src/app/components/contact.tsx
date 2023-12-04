"use client";

import React, { FormEvent, useState, ChangeEvent } from "react";
import InputEmail from "./inputEmail";
import Textarea from "./textarea";
import Button from "./button";

export default function Contact() {
  const [data, setData] = useState<{
    email: string;
    textarea: string;
  }>({
    email: "",
    textarea: "",
  });

  // フォームの値変更時の処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // 変更された入力値
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    // 入力フォームに情報をセット
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // SendMessageボタン押下時、フォームの値をapi/contact/route.tsにPOST送信
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const message = formData.get("textarea");
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email: email, message: message }),
    });
    const result = await response.json();
    alert(result.body);
    // フォーム初期化
    setData((prevFormData) => ({
      ...prevFormData,
      email: "",
    }));
    setData((prevFormData) => ({
      ...prevFormData,
      textarea: "",
    }));
  }

  return (
    <div className="py-2">
      <h2 className="text-xl mb-0.5">Contacts</h2>
      <form className="max-w-sm" onSubmit={onSubmit}>
        <InputEmail name={"email"} value={data.email} onChange={handleChange} />
        <div className="mb-1">
          <Textarea
            name={"textarea"}
            maxlength={200}
            value={data.textarea}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <Button text={"Send Message"} />
        </div>
      </form>
    </div>
  );
}
