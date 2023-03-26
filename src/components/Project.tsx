import { useState, ReactNode } from "react";
import { Modal, Carousel } from "flowbite-react";

interface Props {
  title: string;
  src: string;
  alt?: string;
  children?: ReactNode;
}

const Project = ({ title, src, children, alt = "" }: Props) => {
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
        className="h-auto p-5">
        <Modal.Header className="flex flex-col justify-center align-middle h-auto text-center bg-neutral-900 rounded-t-lg">
          <h1 className="text-heading text-white">{title}</h1>
        </Modal.Header>
        <Modal.Body className="w-full rounded-b-lg bg-neutral-900">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" />
              <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" />
              <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" />
            </Carousel>
          </div>

          <div>{children}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project;
