import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Dev Projects",
  description: "Eevee Youngblood Dev Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
