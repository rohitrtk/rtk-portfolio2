import { a } from "@react-spring/web";

import { useFade } from "@hooks/useFade";
import Stripe from "@components/Stripe";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <a.div
      ref={ref}
      className="w-screen h-screen flex flex-col bg-neutral-900 items-center justify-center sticky top-0 overflow-hidden gap-2 text-center">
      <div className="shadow-xl rounded-xl p-5">
        <h1 className="md:text-6xl text-4xl font-body overflow-hidden">
          <Stripe />
          About Me
        </h1>
        <p className="md:text-2xl text-md font-body">
          Hi! I'm Rohit, and I'm a Software Developer.
        </p>
        <p className="md:text-2xl text-md font-body">
          I'm also a Mathematician, Philosopher, Musician, and Weightlifter.
        </p>
      </div>
    </a.div>
  );
});

export default About;
