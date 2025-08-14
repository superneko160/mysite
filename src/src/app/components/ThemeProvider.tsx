"use client";

import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 初期テーマをローカルストレージから取得
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
