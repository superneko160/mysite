"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-stone-300 dark:bg-zinc-800"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}
