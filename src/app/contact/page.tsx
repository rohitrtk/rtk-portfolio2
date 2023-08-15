"use client";

import { a } from "@react-spring/web";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Backdrop from "@components/Backdrop";
import ContactForm from "@components/ContactForm";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

export default function Contact() {
  const pageStyle = usePageTransition();

  return (
    <>
      <main className="w-full h-full flex flex-col items-center justify-start">
        <Backdrop src="/banner-1.jpg" />

        <a.div style={pageStyle} className="mt-20 w-3/4">
          <LineTitle text="Contact" />

          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="flex justify-center items-center md:w-1/2 w-full mt-10">
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
