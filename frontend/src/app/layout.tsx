'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { NextUIProvider } from "@nextui-org/react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer />
        <Header />
        <main>
          {children}
        </main>
      </NextUIProvider> 
      </body>
    </html>
  );
}
