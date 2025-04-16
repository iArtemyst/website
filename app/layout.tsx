import type { Metadata } from "next";
import "./globals/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Eevee Creative Designer",
  description: "Designed and Coded by Eevee Y",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        {children}
      </body>
    </html>
  );
}
