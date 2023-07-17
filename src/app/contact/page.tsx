"use client";

import { a } from "@react-spring/web";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Backdrop from "@components/Backdrop";
import ContactForm from "@components/ContactForm";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";
// import Bg from "@assets/banner-1.jpg";

export default function Contact() {
  const pageStyle = usePageTransition();

  return (
    <>
      <main className="w-full h-full flex flex-col items-center justify-start mt-10">
        <Backdrop src="/banner-1.jpg" />

        <a.div style={pageStyle} className="mt-20 w-3/4">
          <LineTitle text="Contact" />

          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-1/2 mt-10">
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
