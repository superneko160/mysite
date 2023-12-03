"use client";

import React, { FormEvent } from "react";
import InputEmail from "./inputEmail";
import Textarea from "./textarea";
import Button from "./button";

export default function Contact() {
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
  }

  return (
    <div className="py-2">
      <h2 className="text-xl mb-0.5">Contacts</h2>
      <form className="max-w-sm" onSubmit={onSubmit}>
        <InputEmail name={"email"} />
        <div className="mb-1">
          <Textarea name={"textarea"} maxlength={200} />
        </div>
        <div className="mb-1">
          <Button text={"Send Message"} />
        </div>
      </form>
    </div>
  );
}
