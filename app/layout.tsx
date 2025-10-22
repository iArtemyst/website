import type { Metadata } from "next";
import "./globals/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Evelyn Youngblood Portfolio",
  description: "Designed and Coded by Evelyn Youngblood",
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
