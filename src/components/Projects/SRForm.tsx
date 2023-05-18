import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import {
  SiBootstrap,
  SiCpanel,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiPhp
} from "@icons-pack/react-simple-icons";
import { Tooltip } from "@material-tailwind/react";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Hyperlink from "@components/UI/Hyperlink";

import SNP1 from "@assets/images/SNP-1.png";
import SNP2 from "@assets/images/SNP-2.png";
import SNP3 from "@assets/images/SNP-3.png";
import SNP4 from "@assets/images/SNP-4.png";
import SNP5 from "@assets/images/SNP-5.png";
import SNP6 from "@assets/images/SNP-6.png";
import SNP7 from "@assets/images/SNP-7.png";
import SNP8 from "@assets/images/SNP-8.png";
import SNP9 from "@assets/images/SNP-9.png";

const images = [
  {
    src: SNP1,
    alt: "First screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP2,
    alt: "Second screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP3,
    alt: "Third screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP4,
    alt: "Fourth screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP5,
    alt: "Fifth screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP6,
    alt: "Sixth screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP7,
    alt: "Seventh screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP8,
    alt: "Eigth screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  },
  {
    src: SNP9,
    alt: "Ninth screenshot of the Student Registration Form I helped design for Six Nations Polytechnic"
  }
];

// Student Registration Form
const SRForm = () => {
  const title = "Student Registration Form";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} coverUrl={SNP1} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="min-h-[480px] p-5">
          <Carousel className="rounded-xl h-full" loop={true}>
            {images.map(({ src, alt }, index) => (
              <img
                src={src}
                alt={alt}
                key={index}
                className="h-full w-full object-cover"
              />
            ))}
          </Carousel>
        </div>
        <div className="flex flex-row justify-center gap-5">
          <Tooltip content="HTML">
            <SiHtml5 color="#E34F26" size={48} />
          </Tooltip>
          <Tooltip content="CSS">
            <SiCss3 color="#1572B6" size={48} />
          </Tooltip>
          <Tooltip content="JavaScript">
            <SiJavascript color="#F7DF1E" size={48} />
          </Tooltip>
          <Tooltip content="Bootstrap">
            <SiBootstrap color="#7952B3" size={48} />
          </Tooltip>
          <Tooltip content="PHP">
            <SiPhp color="#777BB4" size={48} />
          </Tooltip>
          <Tooltip content="jQuery">
            <SiJquery color="#0769AD" size={48} />
          </Tooltip>
          <Tooltip content="MySQL">
            <SiMysql color="#4479A1" size={48} />
          </Tooltip>
          <Tooltip content="cPanel">
            <SiCpanel color="#FF6C2C" size={48} />
          </Tooltip>
        </div>
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

export default SRForm;
