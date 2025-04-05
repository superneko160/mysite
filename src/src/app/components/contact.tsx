"use client";

import React, { FormEvent, useState } from "react";
import * as v from "valibot";
import { validateContactForm } from "./../utils/validator";
import type { ContactForm } from "./../types/ContactForm";
import InputEmail from "./inputEmail";
import Textarea from "./textarea";
import Button from "./button";

export default function Contact() {
  const [data, setData] = useState<ContactForm>({
    email: "",
    message: "",
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
    const validation = validateContactForm(formData);

    if (!validation.success) {
      alert(validation.error);
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(validation.data),
    });

    const result = await response.json();
    alert(result.body);

    // フォーム初期化
    setData((prevFormData) => ({
      email: "",
      message: "",
    }));
  }

  return (
    <div className="py-2">
      <h2 className="text-xl text-gray-600 dark:text-gray-50 mb-0.5">
        Contacts
      </h2>
      <form className="max-w-sm" onSubmit={onSubmit}>
        <InputEmail name={"email"} value={data.email} onChange={handleChange} />
        <div className="mb-1">
          <Textarea
            name={"message"}
            value={data.message}
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
