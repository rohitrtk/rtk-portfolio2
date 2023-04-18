import { ReactNode, forwardRef } from "react";
import { a, useTransition } from "@react-spring/web";

import CarouselGallery from "./CarouselGallery";

interface Props {
  title: string;
  children?: ReactNode;
  modalOpen?: boolean;
  setModalOpen: (value: boolean) => void;
}

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ title, children, setModalOpen, modalOpen }, ref) => {
    const transition = useTransition(modalOpen, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: {
        duration: 300
      }
    });

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
        {transition((style, item) =>
          modalOpen ? (
            <a.div
              style={style}
              className="relative rounded-lg m-auto justify-start items-center flex flex-col bg-neutral-900 w-2/3 h-full overflow-y-scroll">
              <h1 className="font-body text-6xl underline p-5 text-center">
                {title}
              </h1>
              <div className="flex flex-row justify-center p-5">
                <CarouselGallery images={[]} />
              </div>
              {children}
            </a.div>
          ) : (
            <></>
          )
        )}
      </div>
    );
  }
);

export default Modal;
