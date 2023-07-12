import type { Metadata } from "next";
// import { a, useTransition } from "@react-spring/web";
// import { Inter } from "next/font/google";

import { ThemeProvider } from "@lib/MT";

import "@styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });
import Test from "@components/Test";
import Navbar from "@components/Navbar";

export const metadata: Metadata = {
  title: "Rohit Kisto",
  description: "Rohit Kisto's Portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="bg-dt-black text-dt-light-blue m-0 scrollbar-hide w-screen h-screen flex flex-col items-center">
          <Navbar />

          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
