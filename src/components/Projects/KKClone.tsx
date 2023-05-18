import { useState } from "react";
import { Tooltip, Carousel, Typography } from "@material-tailwind/react";
import {
  SiAstro,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiHtml5
} from "@icons-pack/react-simple-icons";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";

import KK1 from "@assets/images/kk-1.png";
import KK2 from "@assets/images/kk-2.png";
import KK3 from "@assets/images/kk-3.png";
import KK4 from "@assets/images/kk-4.png";
import KK5 from "@assets/images/kk-5.png";

const images = [
  {
    src: KK1,
    alt: "First screenshot of my Krispy Kreme clone"
  },
  {
    src: KK2,
    alt: "Second screenshot of my Krispy Kreme clone"
  },
  {
    src: KK3,
    alt: "Third screenshot of my Krispy Kreme clone"
  },
  {
    src: KK4,
    alt: "Fourth screenshot of my Krispy Kreme clone"
  },
  {
    src: KK5,
    alt: "Fifth screenshot of my Krispy Kreme clone"
  }
];

// Krispy Kreme Clone
const KKClone = () => {
  const title = "Krispy Kreme Clone";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} coverUrl={KK1} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="min-h-[480px] p-5">
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
          <Tooltip content="Astro">
            <SiAstro color="#FF5D01" size={48} />
          </Tooltip>
          <Tooltip content="HTML">
            <SiHtml5 color="#E34F26" size={48} />
          </Tooltip>
          <Tooltip content="TypeScript">
            <SiTypescript color="#3178C6" size={48} />
          </Tooltip>
          <Tooltip content="TailwindCSS">
            <SiTailwindcss color="#06B6D4" size={48} />
          </Tooltip>
        </div>

        <a
          className="flex flex-row justify-center items-center gap-2 mt-5 hover:underline"
          href="https://github.com/rohitrtk/krispy-kreme-clone"
          target="_blank">
          <SiGithub />
          GitHub Repo
        </a>

        <div className="w-full text-left p-2 gap-5 [&>*]:m-5">
          <section>
            <h3 className="text-xl underline">Goal</h3>
            <span>
              I wanted to practice my tailwind skills, so I decided to clone the
              Krispy Kreme website because it is a relatively simple website,
              and I like donuts.
            </span>
          </section>

          <section>
            <h3 className="text-xl underline">Description</h3>
            <span className="bg-yellow-300 text-black">
              The project uses Astro for page routing, TypeScript for
              interactivity, and TailwindCSS for styling.
            </span>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default KKClone;
