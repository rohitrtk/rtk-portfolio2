import { ReactNode, forwardRef } from "react";
import { a, useTransition } from "@react-spring/web";

interface Props {
  title: string;
  children?: ReactNode;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ title, children, setModalOpen, modalOpen }, ref) => {
    const transitions = useTransition(modalOpen, {
      from: { opacity: 0, transform: "translateY(-10px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(-10px)" },
      config: {
        duration: 150
      },
      exitBeforeEnter: true
    });

    const closeModal = () => {
      setModalOpen(false);
      document.body.classList.toggle("overflow-y-hidden");
    };

    return transitions(
      (style, item) =>
        item && (
          <a.div
            style={{ opacity: style.opacity }}
            ref={ref}
            className="fixed top-0 left-0 m-auto z-50 w-screen h-screen p-4">
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
              onClick={closeModal}
            />
            <a.div
              style={style}
              className="relative rounded-lg m-auto justify-start items-center flex flex-col bg-neutral-900 w-2/3 h-full overflow-y-scroll">
              <h1 className="font-body text-6xl underline p-5 text-center">
                {title}
              </h1>
              {children}
            </a.div>
          </a.div>
        )
    );
  }
);

export default Modal;
