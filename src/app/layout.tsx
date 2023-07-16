import type { Metadata } from "next";
import { ThemeProvider } from "@lib/MT";

import Navbar from "@components/Navbar";

import "@styles/globals.css";

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
