import { Children, ReactNode, forwardRef } from "react";

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
        className="hidden z-50 fixed text-center right-0 top-0 -translate-1/2 w-full h-full bg-neutral-900 p-10 align-middle justify-center"
        onClick={toggleModal}>
        <h1 className="font-body text-6xl underline p-5">{title}</h1>
        <div className="flex flex-row justify-center p-5">
          <CarouselGallery images={[]} />
        </div>
        {children}
      </div>
    );
  }
);

export default Modal;
