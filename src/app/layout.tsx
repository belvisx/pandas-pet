import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import {
  ClerkProvider,
} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "PantasPet",
  description: "Pet Shop do Panda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`bg-slate-700 antialiased`}
      >
      <Navbar/>
        <main className=" h-screen p-16">
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
