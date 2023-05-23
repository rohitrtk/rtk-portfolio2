import { useEffect, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGithub,
  SiTensorflow,
  SiRedux,
  SiReact
} from "@icons-pack/react-simple-icons";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Carousel from "@components/UI/Carousel";
import useMobileView from "@hooks/useMobileView";

import PG1 from "@assets/images/pomstagram-1.png";
import PG2 from "@assets/images/pomstagram-2.png";
import PG3 from "@assets/images/pomstagram-3.png";
import PG4 from "@assets/images/pomstagram-4.png";
import PG5 from "@assets/images/pomstagram-5.png";
import MPG1 from "@assets/images/mobile/pomstagramm-1.png";
import MPG2 from "@assets/images/mobile/pomstagramm-2.png";
import MPG3 from "@assets/images/mobile/pomstagramm-3.png";
import MPG4 from "@assets/images/mobile/pomstagramm-4.png";
import MPG5 from "@assets/images/mobile/pomstagramm-5.png";

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

const mobileImages = [
  {
    src: MPG1,
    alt: "First mobile screenshot of Pomstagram"
  },
  {
    src: MPG2,
    alt: "Second mobile screenshot of Pomstagram"
  },
  {
    src: MPG3,
    alt: "Third mobile screenshot of Pomstagram"
  },
  {
    src: MPG4,
    alt: "Fourth mobile screenshot of Pomstagram"
  },
  {
    src: MPG5,
    alt: "Fifth mobile screenshot of Pomstagram"
  }
];

const Pomstagram = () => {
  const title = "Pomstagram";

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<typeof images>([]);
  const isMobileView = useMobileView();

  useEffect(
    () => setCurrentImages(isMobileView ? mobileImages : images),
    [isMobileView]
  );

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} coverUrl={PG1} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="max-h-[480px] p-5">
          <Carousel>
            {currentImages.map(({ src, alt }, index) => (
              <img
                src={src}
                alt={alt}
                key={index}
                draggable={false}
                className="h-full w-full object-center object-fill"
              />
            ))}
          </Carousel>
        </div>

        <div className="flex flex-row justify-center gap-5 md:p-0 p-5 flex-wrap md:flex-nowrap">
          <Tooltip content="Next.js">
            <SiNextdotjs
              color="#ffffff"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="React">
            <SiReact
              color="#61DAFB"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="TypeScript">
            <SiTypescript
              color="#3178C6"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="Node.js">
            <SiNodedotjs
              color="#339933"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="Express.js">
            <SiExpress
              color="#ffffff"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="MongoDB">
            <SiMongodb
              color="#47A248"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="Redux">
            <SiRedux
              color="#764ABC"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="TailwindCSS">
            <SiTailwindcss
              color="#06B6D4"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
          <Tooltip content="TensorFlow">
            <SiTensorflow
              color="#FF6F00"
              className="md:w-[48px] md:h-[48px] w-[20px] h-[20px]"
            />
          </Tooltip>
        </div>

        <a
          className="flex flex-row justify-center items-center gap-2 mt-5 hover:underline"
          href="https://github.com/rohitrtk/pomstagram"
          target="_blank">
          <SiGithub />
          GitHub Repo
        </a>

        <div className="w-full text-left p-2 gap-5 md:[&>*]:m-5 [&>*]:m-2 md:text-xl text-md">
          <section>
            <h3 className="text-xl underline">Goal</h3>
            <span>
              My goal for this project to create a fullstack application where
              on the frontend, looked similiar to that of VSCO. For the backend,
              I wanted to create an API that would be able to check a user
              upload and determine if it was a Pomeranian. If the picture was a
              Pomeranian, the user would be allowed to post the photo, otherwise
              the user wouldn't be able to upload the photo.
            </span>
          </section>

          <section>
            <h3 className="text-xl underline">Description</h3>
            <span className="bg-yellow-300 text-black">
              The project uses a MERN (MongoDB, Express, React, Node) stack
              together with TensorFlow to verify user uploads.
            </span>
          </section>

          <section>
            Users of the site can create an account and then log in. On the home
            page, users will see posts from all users who have posted. Users can
            navigate to their own profile by clicking on their profile picture
            to see their uploads, or they can click on the profile pictures of
            other users who have uploaded photos to view that users profile.
            Each profile displays the number of likes that user has given, and
            the number of posts they have. Users can upload photos by clicking
            on a button on the navbar where they can choose a photo from the
            computer and write a description. Upon posting the image, the
            backend checks if the photo is of a Pomeranian. If the picture isn't
            of a Pomeranian (or if the Pomeranian isn't clear enough), the user
            is given an error message.
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default Pomstagram;
