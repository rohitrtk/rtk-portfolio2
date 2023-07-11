import { forwardRef } from "react";
import { a } from "@react-spring/web";

import Stripe from "@components/React/Stripe";
import { useFade } from "@hooks/useFade";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const [fadeRef, style] = useFade();

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

export default About;
