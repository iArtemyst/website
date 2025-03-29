import type { Metadata } from "next";
import React from "react";
import "@/app/globals/globals.css";

export const metadata: Metadata = {
  title: "Portfolio Design Page",
  description: "Eevee Youngblood Project",
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
