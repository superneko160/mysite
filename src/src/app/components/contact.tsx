"use client";

import React, { FormEvent, useState } from "react";
import { z } from "zod";
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
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // SendMessageボタン押下時、フォームの値をapi/contact/route.tsにPOST送信
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = z.string().email();
    const textarea = z.string();
    const form_email = email.safeParse(formData.get("email"));
    if (!form_email.success) {
      alert("Eメールの形式ではありません");
      return;
    }

    const form_textarea = textarea.safeParse(formData.get("textarea"));
    if (!form_textarea.success) {
      alert("テキストエリアに入力された値が不正です");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email: form_email.data, message: form_textarea.data }),
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
      <h2 className="text-xl text-gray-50 mb-0.5">Contacts</h2>
      <form className="max-w-sm" onSubmit={onSubmit}>
        <InputEmail name={"email"} value={data.email} onChange={handleChange} />
        <div className="mb-1">
          <Textarea
            name={"textarea"}
            value={data.textarea}
            maxlength={200}
            minlength={1}
            onChange={handleChange}
          />
        </div>
        <div className="flex mb-1 justify-center sm:justify-start">
          <Button text={"Send Message"} />
        </div>
      </form>
    </div>
  );
}
