"use client";

import { Typography } from "@material-tailwind/react";
import { a } from "@react-spring/web";
import Backdrop from "@components/Backdrop";
import usePageTransition from "@hooks/usePageTransition";
import Link from "next/link";
import Navbar from "@components/Navbar";

export default function Error404() {
  const pageStyle = usePageTransition();

  return (
    <main className="bg-dt-black text-dt-light-blue m-0 scrollbar-hide w-screen h-screen flex flex-col items-center">
      <Navbar />

      <div className="fixed z-0 w-screen h-screen overflow-hidden">
        <Backdrop src="/banner-1.jpg" />
      </div>

      <a.div
        style={pageStyle}
        className="flex flex-col justify-center items-center w-full h-full">
        <Typography className="text-4xl font-primary">404 | Error</Typography>
        <Typography className="text-2xl font-primary">
          Page not found
        </Typography>
      </a.div>
    </main>
  );
}
