import { useState } from "react";
import { Tooltip, Carousel } from "@material-tailwind/react";
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
          <Tooltip content="React">
            <SiReact color="#61DAFB" size={48} />
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
          <Tooltip content="Redux">
            <SiRedux color="#764ABC" size={48} />
          </Tooltip>
          <Tooltip content="TailwindCSS">
            <SiTailwindcss color="#06B6D4" size={48} />
          </Tooltip>
          <Tooltip content="TensorFlow">
            <SiTensorflow color="#FF6F00" size={48} />
          </Tooltip>
        </div>

        <a
          className="flex flex-row justify-center items-center gap-2 mt-5 hover:underline"
          href="https://github.com/rohitrtk/pomstagram"
          target="_blank">
          <SiGithub />
          GitHub Repo
        </a>

        <div className="w-full text-left p-2 gap-5 [&>*]:m-5">
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
