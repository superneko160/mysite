import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneko",
  description: "sneko site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${quicksand.className} bg-stone-100 dark:bg-black transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
