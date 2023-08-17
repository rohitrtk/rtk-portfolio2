"use client";

import { Typography } from "@material-tailwind/react";
import { a } from "@react-spring/web";
import Backdrop from "@components/common/Backdrop";
import usePageTransition from "@hooks/usePageTransition";
import Navbar from "@components/common/Navbar";

export default function Error404() {
  const pageStyle = usePageTransition();

  return (
    <>
      <Backdrop src="/banner-1.jpg" />

      <main className="bg-dt-black text-dt-light-blue m-0 scrollbar-hide w-screen h-screen flex flex-col items-center">
        <Navbar />

        <a.div
          style={pageStyle}
          className="flex flex-col justify-center items-center w-full h-full">
          <Typography className="text-4xl font-primary">404 | Error</Typography>
          <Typography className="text-2xl font-primary">
            Page not found
          </Typography>
        </a.div>
      </main>
    </>
  );
}
