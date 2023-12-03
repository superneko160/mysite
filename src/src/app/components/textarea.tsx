"use client";

import React from "react";

type TextareaProps = {
  name: string;
  maxlength: number;
};

export default function Textarea({ name, maxlength }: TextareaProps) {
  const placeholder = `The message you can send is limited to ${maxlength} characters`;

  return (
    <textarea
      className="block h-52 p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      required
      name={name}
      maxLength={maxlength}
    ></textarea>
  );
}
