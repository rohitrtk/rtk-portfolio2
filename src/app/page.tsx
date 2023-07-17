"use client";

import { ReactNode, useLayoutEffect } from "react";
import { Typography } from "@lib/MT";
import { a } from "@react-spring/web";

import Backdrop from "@components/Backdrop";
import useSlideIn from "@hooks/useSlideIn";
import Socials from "@components/Socials";

import usePageTransition from "@hooks/usePageTransition";
import BlurImage from "@components/BlurImage";

const items: ReactNode[] = [
  <Typography variant="h1" className="font-primary font-bold text-dt-blue">
    Rohit
  </Typography>,
  <Typography variant="h1" className="font-primary font-bold text-dt-blue">
    Kisto
  </Typography>,
  <Typography variant="h1" className="font-primary font-bold text-dt-gold">
    Software Developer
  </Typography>
];

export default function Home() {
  const slideIns = useSlideIn(items);

  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="fixed -z-20 w-screen h-screen overflow-hidden">
        <Backdrop src="/banner-1.jpg" />
      </div>
      <a.div
        style={pageStyle}
        className="flex flex-col justify-center items-center">
        <div className="flex md:flex-row flex-col gap-5 w-full h-full m-10 justify-center items-center text-center">
          <div>
            <BlurImage
              src="/me.jpg"
              width={400}
              height={400}
              alt="Rohit Kisto"
              className="rounded-full w-64 h-64 object-cover unselectable"
            />
          </div>
          <div className="flex flex-col justify-center md:items-start items-center">
            {slideIns.map((props, index) => (
              <a.div key={`main-slidein-${index}`} style={props}>
                <>{items[index]}</>
              </a.div>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <Socials />
        </div>
      </a.div>
    </main>
  );
}
