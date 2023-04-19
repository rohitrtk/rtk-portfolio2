import { forwardRef } from "react";
import { a } from "@react-spring/web";

import { useFade } from "@hooks/useFade";

import Stripe from "@components/Stripe";
import Navbar from "@components//Navbar";

const Intro = forwardRef<HTMLDivElement>((props, ref) => {
  const [fadeRef, style] = useFade();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center sticky top-0">
      <div ref={ref} className="fixed top-0 justify-end flex w-full z-10">
        <Navbar />
      </div>
      <Stripe />
      <a.div ref={fadeRef} style={style}>
        <NormalView />
        <MobileView />
      </a.div>
    </div>
  );
});

export default Intro;

const MobileView = () => {
  const [ref, style] = useFade();

  return (
    <div className="flex sm:flex-row flex-col w-full">
      <div className="sm:hidden text-center justify-center align-middle shadow-xl rounded-xl p-5">
        <h1 className="text-7xl font-body font-bold">Rohit Kisto</h1>
        <h1 className="text-2xl font-body font-bold">Software Developer</h1>
      </div>
    </div>
  );
};

const NormalView = () => {
  return (
    <div className="hidden sm:flex flex-row justify-center min-w-full">
      <div className="flex flex-col justify-start text-center shadow-xl rounded-xl p-5">
        <h1 className="flex flex-row text-9xl font-body font-bold">
          Rohit Kisto
        </h1>
        <h1 className="text-2xl md:text-3xl font-body font-bold">
          Software Developer
        </h1>
      </div>
    </div>
  );
};
