"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg bg-stone-300 dark:bg-gray-700"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}
