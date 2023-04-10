import { useState, ReactNode } from "react";
import { Modal, Carousel } from "flowbite-react";
import ProgrammingIcon from "./Icons";

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
  carouselPhotos: string[];
  toolsUsed?: string[];
  children?: ReactNode;
}

const Project = ({
  title,
  src,
  children,
  toolsUsed,
  carouselPhotos,
  alt = ""
}: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`relative cursor-pointer flex flex-col align-middle justify-center`}
        onClick={toggleOpen}>
        <img className="h-full max-w-full rounded-lg" src={src} alt={alt} />
        <div className="rounded-lg flex flex-col text-center align-middle justify-center absolute w-[100%] h-full top-0 opacity-75 bg-neutral-900">
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
              {carouselPhotos.map((photo, i) => (
                <img
                  src={photo}
                  className="w-full h-full"
                  key={`carousel-photo-${i}`}
                />
              ))}
            </Carousel>
            <div className="text-center">
              <h3 className="font-text underline font-bold text-2xl">
                Built Using
              </h3>
            </div>
            <div className="flex flex-row p-2 gap-4 justify-center align-middle">
              {toolsUsed?.map((icon, i) => (
                <ProgrammingIcon
                  label={icon}
                  icon={icon.toLowerCase()}
                  key={`p-icon-${i}`}
                />
              ))}
            </div>
            <div className="text-center">
              <h3 className="font-text underline font-bold text-2xl">
                Description
              </h3>
            </div>
            <div className="flex flex-col gap-4">{children}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project;
