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
import UofTIcon from "@assets/uoft.svg";
import WeightliftingIcon from "@assets/weightlifting.svg";
import GuitarIcon from "@assets/guitar.svg";
import BookIcon from "@assets/book.svg";

import Backdrop from "@components/Backdrop";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

import Bg from "@assets/banner-3.jpg";

export default function About() {
  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start my-10">
      <Backdrop src={Bg} />

      <a.div
        style={pageStyle}
        className="mt-20 w-full flex flex-col items-center h-full">
        <div className="w-3/4 items-center h-full">
          <LineTitle text="About" />

          <section className="flex flex-col items-center text-center mt-20 gap-5">
            <Typography className="font-primary" variant="h5">
              Hi! I'm Rohit, and I'm a Software Developer. I'm also a graduate
              of the University of Toronto Mississauga.
            </Typography>

            <Image src={UofTIcon} alt="" width="360" height="360" />

            <Typography className="font-primary" variant="h5">
              I specialize in building full-stack web applications primarily
              using React, TypeScript, and Tailwind.
            </Typography>

            <div className="flex flex-row justify-evenly w-full">
              <SiTypescript color="#3178C6" size={128} />
              <SiReact color="#61DAFB" size={128} />
              <SiTailwindcss color="#06B6D4" size={128} />
            </div>

            <Typography className="font-primary" variant="h5">
              I also have interests in Application Development, API Development,
              Game Development, and Graphics Programming.
            </Typography>

            <div className="flex flex-row justify-evenly w-full">
              <SiDotnet color="#512BD4" size={128} />
              <SiUnrealengine color="#FFFFFF" size={128} />
              <SiOpengl color="#5586A4" size={128} />
            </div>

            <Typography className="font-primary" variant="h5">
              In my free time, I enjoy weight lifting, playing guitar, and
              reading.
            </Typography>

            <div className="flex flex-row justify-evenly w-full">
              <Image src={GuitarIcon} alt="" width={128} height={128} />
              <Image src={WeightliftingIcon} alt="" width={128} height={128} />
              <Image src={BookIcon} alt="" width={128} height={128} />
            </div>
          </section>
        </div>
      </a.div>
    </main>
  );
}
