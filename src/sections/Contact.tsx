import { a } from "@react-spring/web";

import { useFade } from "@hooks/useFade";

import ContactForm from "@components/React/ContactForm";
import Stripe from "@components/React/Stripe";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const [fadeRef, style] = useFade();

  return (
    <div
      ref={ref}
      className="flex flex-col p-10 align-middle w-screen h-screen items-center justify-center sticky top-0 bg-neutral-900 overflow-hidden">
      <Stripe />
      <a.div
        ref={fadeRef}
        style={style}
        className="flex flex-col justify-center text-center items-center gap-2 shadow-xl rounded-xl p-5">
        <h1 className="md:text-6xl text-4xl font-body overflow-hidden">
          Contact
        </h1>
        <div className="flex flex-col justify-center align-middle md:w-1/2 text-center">
          <p className="md:text-2xl text-md font-body">
            Send me a message if you'd like to get in touch, and I'll get back
            to you as soon as I can!
          </p>
          <div className="justify-center align-middle container mx-auto parallax-interactive pt-2">
            <ContactForm />
          </div>
        </div>
      </a.div>
    </div>
  );
});

export default Contact;
