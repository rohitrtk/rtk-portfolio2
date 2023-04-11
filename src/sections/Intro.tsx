import { a, useTrail } from "@react-spring/web";

import { useFade } from "@hooks/useFade";
import Stripe from "@components/Stripe";

const Intro = () => {
  return (
    <>
      <Stripe />
      <NormalView />
      <MobileView />
    </>
  );
};

export default Intro;

const MobileView = () => {
  const [ref, style] = useFade();

  return (
    <a.div ref={ref} style={style} className="flex sm:flex-row flex-col w-full">
      <div className="sm:hidden text-center justify-center align-middle">
        <h1 className="text-7xl font-body font-bold">Rohit Kisto</h1>
        <h1 className="text-2xl font-body font-bold">Software Developer</h1>
      </div>
    </a.div>
  );
};

const NormalView = () => {
  const [ref, style] = useFade();

  return (
    <a.div className="hidden sm:flex flex-row justify-center min-w-full">
      <a.div
        ref={ref}
        style={style}
        className="flex flex-col justify-start text-center">
        <a.h1 className="flex flex-row text-9xl font-body font-bold">
          <a.span>Rohit Kisto</a.span>
        </a.h1>
        <a.h1 className="text-2xl md:text-3xl font-body font-bold">
          Software Developer
        </a.h1>
      </a.div>
    </a.div>
  );
};
