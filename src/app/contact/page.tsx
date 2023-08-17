"use client";

import { a } from "@react-spring/web";
import { Typography } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Backdrop from "@components/common/Backdrop";
import LineTitle from "@components/common/LineTitle";
import ContactForm from "@components/contact/ContactForm";
import usePageTransition from "@hooks/usePageTransition";

export default function Contact() {
  const pageStyle = usePageTransition();

  return (
    <>
      <Backdrop src="/banner-1.jpg" />

      <main className="w-full h-full flex flex-col items-center justify-start">
        <a.div style={pageStyle} className="mt-20 w-3/4">
          <LineTitle text="Contact" />

          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="flex flex-col text-center justify-center items-center md:w-1/2 w-full mt-10 gap-5">
              <Typography variant="h5" className="font-primary ">
                Send me a message with the form below! I'll get back to you as
                soon as I can.
              </Typography>
              <ContactForm />
            </div>
          </div>
        </a.div>
      </main>

      <ToastContainer
        bodyClassName="text-dt-light-blue"
        theme="dark"
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        draggable={false}
        closeOnClick
      />
    </>
  );
}
