import { useState, ReactNode } from "react";
import { Modal, Carousel } from "flowbite-react";
import ProgrammingIcon, { JavaScriptIcon, PHPIcon } from "./Icons";

export interface ProjectData {
  title: string;
  coverPhoto: string;
  toolsUsed: string[];
  carouselPhotos: string[];
  info: string[];
}

interface Props {
  title: string;
  src: string;
  alt?: string;
  toolsUsed?: string[];
  children?: ReactNode;
}

const Project = ({ title, src, children, toolsUsed, alt = "" }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative cursor-pointer" onClick={toggleOpen}>
        <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
        <div className="text-center align-middle justify-center absolute w-[100%] h-[25%] top-1/2 opacity-75 bg-neutral-900">
          <p>{title}</p>
        </div>
      </div>

      <Modal
        show={open}
        onClose={toggleOpen}
        popup={true}
        dismissible={true}
        position="center"
        size="4xl">
        <Modal.Body className="rounded-b-lg bg-neutral-900 overflow-y-scroll">
          <div className="flex font-text font-bold underline text-4xl justify-center text-center p-3">
            <h1>{title}</h1>
          </div>
          <div className="h-96">
            <Carousel>
              <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" />
              <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" />
              <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" />
            </Carousel>
            <div className="flex flex-row p-2 gap-4">
              <ProgrammingIcon icon="php" />
              <ProgrammingIcon icon="javascript" />
              <ProgrammingIcon icon="aframe" />
            </div>
            <div className="flex flex-col gap-4">{children}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project;
