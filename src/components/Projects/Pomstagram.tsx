import { useState } from "react";
import { Tooltip, Carousel } from "@material-tailwind/react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGithub
} from "@icons-pack/react-simple-icons";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";

const Pomstagram = () => {
  const title = "Pomstagram";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="min-h-[480px] p-5">
          <Carousel className="rounded-xl h-full" loop={true}>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>

        <div className="flex flex-row justify-center gap-5">
          <Tooltip content="Next.js">
            <SiNextdotjs color="#ffffff" size={48} />
          </Tooltip>
          <Tooltip content="TypeScript">
            <SiTypescript color="#3178C6" size={48} />
          </Tooltip>
          <Tooltip content="Node.js">
            <SiNodedotjs color="#339933" size={48} />
          </Tooltip>
          <Tooltip content="Express.js">
            <SiExpress color="#ffffff" size={48} />
          </Tooltip>
          <Tooltip content="MongoDB">
            <SiMongodb color="#47A248" size={48} />
          </Tooltip>
          <Tooltip content="TailwindCSS">
            <SiTailwindcss color="#06B6D4" size={48} />
          </Tooltip>
        </div>

        <a
          className="flex flex-row justify-center items-center gap-2 mt-5 hover:underline"
          href="https://github.com/rohitrtk/pomstagram"
          target="_blank">
          <SiGithub />
          GitHub Repo
        </a>
      </Modal>
    </div>
  );
};

export default Pomstagram;
