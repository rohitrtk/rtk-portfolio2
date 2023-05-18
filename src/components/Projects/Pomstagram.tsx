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

import PG1 from "@assets/images/Pomstagram-1.png";
import PG2 from "@assets/images/Pomstagram-2.png";
import PG3 from "@assets/images/Pomstagram-3.png";
import PG4 from "@assets/images/Pomstagram-4.png";
import PG5 from "@assets/images/Pomstagram-5.png";

const images = [
  {
    src: PG1,
    alt: "First screenshot of Pomstagram"
  },
  {
    src: PG2,
    alt: "Second screenshot of Pomstagram"
  },
  {
    src: PG3,
    alt: "Third screenshot of Pomstagram"
  },
  {
    src: PG4,
    alt: "Fourth screenshot of Pomstagram"
  },
  {
    src: PG5,
    alt: "Fifth screenshot of Pomstagram"
  }
];

const Pomstagram = () => {
  const title = "Pomstagram";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} coverUrl={PG1} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="max-h-[480px] p-5">
          <Carousel className="rounded-xl h-full" loop={true}>
            {images.map(({ src, alt }, index) => (
              <img
                src={src}
                alt={alt}
                key={index}
                className="h-full w-full object-contain"
              />
            ))}
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
