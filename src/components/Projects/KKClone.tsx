import { useEffect, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import {
  SiAstro,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiHtml5
} from "@icons-pack/react-simple-icons";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Carousel from "@components/UI/Carousel";

import KK1 from "@assets/images/kk-1.png";
import KK2 from "@assets/images/kk-2.png";
import KK3 from "@assets/images/kk-3.png";
import KK4 from "@assets/images/kk-4.png";
import KK5 from "@assets/images/kk-5.png";
import MKK1 from "@assets/images/mobile/kkm-1.png";
import MKK2 from "@assets/images/mobile/kkm-2.png";
import MKK3 from "@assets/images/mobile/kkm-3.png";
import MKK4 from "@assets/images/mobile/kkm-4.png";
import useMobileView from "@hooks/useMobileView";

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

const mobileImages = [
  {
    src: MKK1,
    alt: "First mobile screenshot of my Krispy Kreme clone"
  },
  {
    src: MKK2,
    alt: "Second mobile screenshot of my Krispy Kreme clone"
  },
  {
    src: MKK3,
    alt: "Third mobile screenshot of my Krispy Kreme clone"
  },
  {
    src: MKK4,
    alt: "Fourth mobile screenshot of my Krispy Kreme clone"
  }
];

// Krispy Kreme Clone
const KKClone = () => {
  const title = "Krispy Kreme Clone";

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<typeof images>([]);
  const isMobileView = useMobileView();

  useEffect(
    () => setCurrentImages(isMobileView ? mobileImages : images),
    [isMobileView]
  );

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} coverUrl={KK1} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="min-h-[480px] p-5">
          <Carousel>
            {currentImages.map(({ src, alt }, index) => (
              <img
                src={src}
                alt={alt}
                key={index}
                //draggable={false}
                className="h-full w-full object-center object-contain cursor-pointer"
              />
            ))}
          </Carousel>
        </div>

        <div className="flex flex-row justify-center gap-5 md:p-0 p-5 flex-wrap md:flex-nowrap">
          <Tooltip content="Astro">
            <SiAstro
              color="#FF5D01"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="HTML">
            <SiHtml5
              color="#E34F26"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="TypeScript">
            <SiTypescript
              color="#3178C6"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="TailwindCSS">
            <SiTailwindcss
              color="#06B6D4"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
        </div>

        <a
          className="flex flex-row justify-center items-center gap-2 mt-5 hover:underline"
          href="https://github.com/rohitrtk/krispy-kreme-clone"
          target="_blank">
          <SiGithub />
          GitHub Repo
        </a>

        <div className="w-full text-left p-2 gap-5 md:[&>*]:m-5 [&>*]:m-2 md:text-xl text-md">
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
