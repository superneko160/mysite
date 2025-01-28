"use client";

import React from "react";

type TextareaProps = {
  name: string;
  value: string;
  maxlength: number;
  minlength: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea({
  name,
  value,
  maxlength,
  minlength,
  onChange,
}: TextareaProps) {
  const placeholder = `The message you can send is limited to ${maxlength} characters`;

  return (
    <textarea
      className="block h-52 p-2.5 w-full text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 resize-none"
      placeholder={placeholder}
      required
      name={name}
      value={value}
      maxLength={maxlength}
      minLength={minlength}
      onChange={onChange}
    ></textarea>
  );
}
