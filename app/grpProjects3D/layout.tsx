import type { Metadata } from "next";
import React from "react";
import "@/app/globals/globals.css";

export const metadata: Metadata = {
  title: "3D Projects",
  description: "Eevee Youngblood 3D Projects",
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
