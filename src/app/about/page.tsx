"use client";

import { a } from "@react-spring/web";

import { Typography } from "@material-tailwind/react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiOpengl,
  SiUnrealengine,
  SiPython
} from "@icons-pack/react-simple-icons";

import Backdrop from "@components/Backdrop";
import LineTitle from "@components/LineTitle";
import GraphWheel from "@components/GraphWheel";
import usePageTransition from "@hooks/usePageTransition";
// import Bg from "@assets/banner-3.jpg";
import Me from "@assets/images/me.jpeg";

const description = [
  `I'm Rohit, I'm a Software Developer, and a graduate of the
  University of Toronto Mississauga.`,
  `I specialize in building full-stack web applications primarily
  using React, TypeScript, & Tailwind, but also have experience writing
  apps in C++, Java & Python.`,
  `I also have interests in Application Development, API
  Development, Game Development, and Graphics Programming.`,
  `In my free time, I enjoy weight lifting, playing guitar, and
  reading.`
];

export default function About() {
  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start my-10">
      <Backdrop src="/banner-3.jpg" />

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
                center="/me.jpg"
                items={[
                  <SiTypescript color="#3178C6" size={50} />,
                  <SiReact color="#61DAFB" size={50} />,
                  <SiTailwindcss color="#06B6D4" size={50} />,
                  <SiCplusplus color="#00599C" size={50} />,
                  <SiOpengl color="#5586A4" size={50} />,
                  <SiUnrealengine color="#FFFFFF" size={50} />,
                  <SiPython color="#3776AB" size={50} />
                ]}
              />
            </div>
          </div>
        </div>
      </a.div>
    </main>
  );
}
