import type { Metadata } from "next";
import { ThemeProvider } from "@lib/MT";

import Navbar from "@components/common/Navbar";

import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Rohit Kisto",
  description: "Rohit Kisto's Portfolio",
  viewport: {
    height: "device-height",
    width: "device-width",
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
    viewportFit: "contain"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="bg-dt-black text-dt-light-blue m-0 p-0 scrollbar-hide w-screen h-screen flex flex-col items-center overflow-x-hidden">
          <Navbar />

          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
