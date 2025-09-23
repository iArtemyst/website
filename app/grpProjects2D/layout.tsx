import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals/globals.css";

import React from "react";

export const metadata: Metadata = {
  title: "2D Projects",
  description: "Eevee Youngblood 2D Design, Animation, and User Experience Projects",
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
