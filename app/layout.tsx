import type React from "react";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import { ToastProvider } from "@/components/ui/use-toast";
import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aetheria - Your Personal Perfume",
  description: "Create your own unique perfume with Aetheria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
