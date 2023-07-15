"use client";

import { a } from "@react-spring/web";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiOpengl,
  SiUnrealengine
} from "@icons-pack/react-simple-icons";

import Me from "@assets/images/me.jpeg";
import UofTIcon from "@assets/uoft.svg";
import WeightliftingIcon from "@assets/weightlifting.svg";
import GuitarIcon from "@assets/guitar.svg";
import BookIcon from "@assets/book.svg";

import Backdrop from "@components/Backdrop";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

import Bg from "@assets/banner-3.jpg";
import GraphWheel from "@components/GraphWheel";

const description = [
  `I'm Rohit, I'm a Software Developer, and a graduate of the
  University of Toronto Mississauga.`,
  `I specialize in building full-stack web applications primarily
  using React, TypeScript, and Tailwind, but also have experience writing
  apps in C++ and Java.`,
  `I also have interests in Application Development, API
  Development, Game Development, and Graphics Programming.`,
  `In my free time, I enjoy weight lifting, playing guitar, and
  reading.`
];

export default function About() {
  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start my-10">
      <Backdrop src={Bg} />

      <a.div
        style={pageStyle}
        className="mt-20 w-full h-full flex flex-col items-center">
        <div className="w-3/4 items-center h-full">
          <LineTitle text="About" />

          <div className="w-full justify-center items-center mt-10 flex flex-row">
            <section className="flex flex-col gap-6 w-1/2">
              {description.map((d, i) => (
                <Typography
                  key={`about-descriptions-${i}`}
                  className="font-primary text-dt-blue"
                  variant="h5">
                  {d}
                </Typography>
              ))}
            </section>
            <div className="w-1/2 h-full">
              <GraphWheel
                center={Me}
                items={[
                  <SiTypescript color="#3178C6" size={50} />,
                  <SiReact color="#61DAFB" size={50} />,
                  <SiTailwindcss color="#06B6D4" size={50} />,
                  <SiUnrealengine color="#FFFFFF" size={50} />,
                  <SiOpengl color="#5586A4" size={50} />
                ]}
              />
            </div>

            {/* <Image src={UofTIcon} alt="" width="360" height="360" />
            <SiTypescript color="#3178C6" size={128} />
            <SiReact color="#61DAFB" size={128} />
            <SiTailwindcss color="#06B6D4" size={128} />
            <SiDotnet color="#512BD4" size={128} />
            <SiUnrealengine color="#FFFFFF" size={128} />
            <SiOpengl color="#5586A4" size={128} />
            <Image src={GuitarIcon} alt="" width={128} height={128} />
            <Image src={WeightliftingIcon} alt="" width={128} height={128} />
            <Image src={BookIcon} alt="" width={128} height={128} /> */}
          </div>
        </div>
      </a.div>
    </main>
  );
}
