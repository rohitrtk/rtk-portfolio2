"use client";

import { a } from "@react-spring/web";

import Backdrop from "@components/Backdrop";
import ContactForm from "@components/ContactForm";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

import Test from "@assets/banner-1.jpg";

export default function Contact() {
  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start mt-10">
      <Backdrop src={Test} />

      <a.div style={pageStyle} className="mt-20 w-3/4">
        <LineTitle text="Contact" />

        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-1/2 mt-10">
            <ContactForm />
          </div>
        </div>
      </a.div>
    </main>
  );
}
