import { useContext, ReactNode, forwardRef } from "react";

import CarouselGallery from "./CarouselGallery";

interface Props {
  title: string;
  toggleModal: () => void;
  children?: ReactNode;
}

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ title, toggleModal, children }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed top-0 left-0 right-0 z-[99] hidden w-full p-4 overflow-x-hidden overflow-y-scroll md:inset-0 h-full max-h-full bg-red-900"
        onClick={() => {
          toggleModal();
        }}>
        <div className="rounded-lg bg-blue-900 justify-center flex flex-col align-middle">
          <h1 className="font-body text-6xl underline p-5">{title}</h1>
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
