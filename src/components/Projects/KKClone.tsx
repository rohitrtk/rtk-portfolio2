import { useState } from "react";
import { Tooltip, Carousel, Typography } from "@material-tailwind/react";
import {
  SiAstro,
  SiTypescript,
  SiTailwindcss,
  SiGithub
} from "@icons-pack/react-simple-icons";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Hyperlink from "@components/UI/Hyperlink";

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
            As a part of my time at{" "}
            <Hyperlink href="https://snpolytechnic.com/">SNP</Hyperlink>, I had
            to design a registration system similiar to{" "}
            <Hyperlink href="https://www.ouac.on.ca/">OUAC</Hyperlink>, which is
            what high school students use to apply to various post secondary
            institutes in Ontario, Canada. The goal was to have students apply
            directly to{" "}
            <Hyperlink href="https://snpolytechnic.com/">SNP</Hyperlink>, rather
            than through{" "}
            <Hyperlink href="https://www.ouac.on.ca/">OUAC</Hyperlink>.
          </section>

          <section>
            <h3 className="text-xl underline">Description</h3>
            <span className="bg-yellow-300 text-black">
              The project is using a LAMP (Linux, Apache, MySQL, PHP) stack on
              the backend together with HTML, CSS, and JavaScript with help from
              Bootstrap and jQuery on the frontend.
            </span>
          </section>

          <section>
            Users of the site can create an account, they will have an email of
            confirmation sent to them upon successful registration. Users can
            then log in, if it was their first time logging in, they will have a
            message asking them to change their password (as the password is
            generated by the backend). Users can then enter their personal
            information, things such as:
            <ul className="list-disc ml-5">
              <li>First Name</li>
              <li>Last Name</li>
              <li>Pronouns</li>
              <li>Indigenous Affiliation</li>
              <li>Etc...</li>
            </ul>
            Followed by their contact information as well as their previous
            academic experience, whether that be high school or another post
            secondary institute. They also have the option to upload any
            previous transcripts. At the end of this process, users can then
            submit their application for review.
          </section>

          <section>
            Administrators of the site will have an administrator account
            assigned to them which they can log in with. They can see a list of
            all users who have applied and review the information submitted.
            They can then choose to either accept or decline an application.
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default KKClone;