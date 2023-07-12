"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@lib/MT";
import { a, useTransition } from "@react-spring/web";

import Navbar from "@components/Navbar";
import useSlideIn from "@hooks/useSlideIn";
import useFadeIn from "@hooks/useFadeIn";

import Me from "@assets/images/me.jpeg";
import Test from "@assets/banner-1.jpg";

const items = [
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
  const fadeInProps = useFadeIn();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start">
      <Image
        className="fixed -z-20 grayscale opacity-10"
        alt=""
        src={Test}
        placeholder="blur"
      />
      <div className="flex flex-row gap-5 w-full h-full m-10 justify-center items-center">
        <a.div style={fadeInProps}>
          <Image
            src={Me}
            alt="Rohit Kisto"
            className="rounded-full w-64 h-64 object-cover"
            placeholder="blur"
          />
        </a.div>
        <div className="flex flex-col justify-center items-start">
          {slideIns.map((props, index) => (
            <a.div key={`main-slidein-${index}`} style={props}>
              {items[index]}
            </a.div>
          ))}
        </div>
      </div>
    </main>
  );
}
