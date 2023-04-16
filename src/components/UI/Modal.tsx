import { useContext, ReactNode, forwardRef } from "react";

import CarouselGallery from "./CarouselGallery";
import Temp from "@assets/images/snp-1.png";

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
        className="hidden fixed top-0 left-0 z-[99] w-screen h-screen p-4 items-center justify-center bg-black bg-opacity-50"
        onClick={() => {
          toggleModal();
        }}>
        <div className="relative rounded-lg justify-start items-center flex flex-col bg-neutral-900 w-2/3 h-full overflow-y-scroll">
          <h1 className="font-body text-6xl underline p-5 text-center">
            {title}
          </h1>
          <div className="flex flex-row justify-center p-5">
            <img src={Temp} width="400" height="300" />
            {/*<CarouselGallery images={[]} />*/}
          </div>
          {children}
        </div>
      </div>
    );
  }
);

export default Modal;
