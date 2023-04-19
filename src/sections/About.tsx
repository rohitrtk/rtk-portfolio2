import { forwardRef } from "react";
import { a, useSpring } from "@react-spring/web";

import Stripe from "@components/Stripe";
import { useFade } from "@hooks/useFade";

import DumbbellIcon from "@assets/icons/dumbbell.svg";
import AbsoluteValueXIcon from "@assets/icons/absx.svg";
import PiIcon from "@assets/icons/pi.svg";
import BooksIcon from "@assets/icons/books.svg";
import MusicNoteIcon from "@assets/icons/denote.svg";
import GuitarIcon from "@assets/icons/guitar.svg";

import { dumbell, absx } from "@config/AboutAnimations";

const dur = 1000;

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const [fadeRef, style] = useFade();

  const dumbellStyle = useSpring(dumbell);
  const absxStyle = useSpring(absx);

  return (
    <div
      ref={ref}
      className="w-screen h-screen flex flex-col bg-neutral-900 items-center justify-center sticky top-0 overflow-hidden gap-2 text-center">
      <Stripe />

      <a.div ref={fadeRef} style={style} className="shadow-xl rounded-xl p-5">
        <h1 className="md:text-6xl text-4xl font-body overflow-hidden">
          About Me
        </h1>
        <p className="md:text-2xl text-md font-body">
          Hi! I'm Rohit, and I'm a Software Developer.
        </p>
        <p className="md:text-2xl text-md font-body">
          I'm also a Mathematician, Philosopher, Musician, and Weightlifter.
        </p>
      </a.div>
    </div>
  );
});

/*
      <img src={MusicNoteIcon} className="w-[7%]" />
      <img src={GuitarIcon} className="w-[10%]" />
      <img src={PiIcon} className="w-[14%]" />
      <img src={BooksIcon} className="w-[10%]" />

      <a.img
        style={{ ...dumbellStyle, rotateZ: "-45deg" }}
        src={DumbbellIcon}
        className="w-[10%] md:ml-[60%] ml-[50%]"
      />

      <a.div
        style={{ ...absxStyle, rotate: "-20deg" }}
        className="flex flex-col justify-center items-center ml-[-60%]">
        <img src={AbsoluteValueXIcon} className="w-[80%]" />
        <p className="font-body text-md">Stay Positive</p>
      </a.div>
 */

export default About;
