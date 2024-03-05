'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} font-sans`}>
      <NextUIProvider>
        <Header />
        <main>
          {children}
        </main>
      </NextUIProvider> 
      </body>
    </html>
  );
}
