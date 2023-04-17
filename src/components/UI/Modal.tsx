import { ReactNode, forwardRef } from "react";
import { useSpring } from "@react-spring/web";

import CarouselGallery from "./CarouselGallery";

interface Props {
  title: string;
  children?: ReactNode;
  setModalOpen: (value: boolean) => void;
}

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ title, children, setModalOpen }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed top-0 left-0 m-auto z-50 w-screen h-screen p-4">
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={(event) => {
            setModalOpen(false);
            document.body.classList.toggle("overflow-y-hidden");
          }}
        />
        <div className="relative rounded-lg m-auto justify-start items-center flex flex-col bg-neutral-900 w-2/3 h-full overflow-y-scroll">
          <h1 className="font-body text-6xl underline p-5 text-center">
            {title}
          </h1>
          <div className="flex flex-row justify-center p-5">
            <CarouselGallery images={[]} />
          </div>
          {children}
        </div>
      </div>
    );
  }
);

export default Modal;
