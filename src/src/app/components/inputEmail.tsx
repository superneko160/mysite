"use client";

import React from "react";

type InputEmailProps = {
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputEmail({ name, value, onChange }: InputEmailProps) {
  return (
    <div className="relative mb-1">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400 dark:text-amber-100/60"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </div>
      <input
        type="text"
        id="email-address-icon"
        className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 bg-stone-100 border-stone-50 dark:bg-zinc-700 dark:border-gray-600 placeholder-gray-400 dark:placeholder-amber-100/60 text-gray-700 dark:text-amber-100 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your@email.com"
        required
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
