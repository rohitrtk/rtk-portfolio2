import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { a, useTransition } from "@react-spring/web";

import Navbar from "@components/React/RNavbar";
import useSlideIn from "@hooks/useSlideIn";
import useFadeIn from "@hooks/useFadeIn";

import Me from "@assets/images/me.jpeg";
import Test from "@assets/banner-1.jpg";
import { useEffect } from "react";

const items = [
  <Typography variant="h1" className="font-body font-bold text-dt-blue">
    Rohit
  </Typography>,
  <Typography variant="h1" className="font-body font-bold text-dt-blue">
    Kisto
  </Typography>,
  <Typography variant="h1" className="font-body font-bold text-dt-gold">
    Software Developer
  </Typography>
];

interface Props {
  currentUrl?: string;
}

export default function Main({ currentUrl }: Props) {
  const slideIns = useSlideIn(items);
  const fadeInProps = useFadeIn();

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Navbar />
      <img className="fixed -z-20 grayscale opacity-10" src={Test} />
      <div className="flex flex-row gap-5 w-full h-full m-10 justify-center items-center">
        <a.img
          style={fadeInProps}
          alt="Rohit Kisto"
          src={Me}
          className="rounded-full w-64 h-64 object-cover"
        />
        <div className="flex flex-col justify-center items-start">
          {slideIns.map((props, index) => (
            <a.div key={`main-slidein-${index}`} style={props}>
              {items[index]}
            </a.div>
          ))}
        </div>
      </div>
    </div>
  );
}
