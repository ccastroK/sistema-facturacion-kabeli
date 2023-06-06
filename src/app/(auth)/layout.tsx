"use client";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LogIn",
  description: "",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article>{children}</article>;
}
