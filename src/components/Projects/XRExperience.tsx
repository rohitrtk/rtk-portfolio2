import { useState } from "react";
import { Tooltip, Carousel } from "@material-tailwind/react";
import {
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiCss3,
  SiReact,
  SiMicrosoftazure,
  SiAframe
} from "@icons-pack/react-simple-icons";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Hyperlink from "@components/UI/Hyperlink";

// XR Experience
const XRExperience = () => {
  const title = "XR Experience";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="flex flex-row justify-center gap-5">
          <Tooltip content="HTML">
            <SiHtml5 color="#E34F26" />
          </Tooltip>
          <Tooltip content="CSS">
            <SiCss3 color="#1572B6" />
          </Tooltip>
          <Tooltip content="JavaScript">
            <SiJavascript color="#F7DF1E" />
          </Tooltip>
          <Tooltip content="Node.js">
            <SiNodedotjs color="#339933" />
          </Tooltip>
          <Tooltip content="React">
            <SiReact color="#61DAFB" />
          </Tooltip>
          <Tooltip content="aFrame">
            <SiAframe color="#EF2D5E" />
          </Tooltip>
          <Tooltip content="Azure">
            <SiMicrosoftazure color="#0078D4" />
          </Tooltip>
        </div>
        <div className="w-full text-left p-10 gap-5 [&>*]:m-5">
          <section>
            <h3 className="text-xl underline">Goal</h3>
            My initial project at{" "}
            <Hyperlink href="https://snpolytechnic.com/">SNP</Hyperlink>, was to
            create a web app for people to learn about Indigenous Culture. Users
            would be able to "vist" various locations in the browser and walk
            around to see various points of interest. These points of interest
            would have various assets like videos, audio, or images which would
            explain a topic or object of interest.
          </section>

          <section>
            Additionally, people who want to create their own experiences can do
            so (provided they have the source code). Using React, users can
            create their own React components in which they can add their own
            points of interest, media assets, etc.
          </section>

          <section>
            <h3 className="text-xl underline">Description</h3>
            <span className="bg-yellow-300 text-black">
              The project uses primarily JavaScript and aFrame (a virtual realiy
              web framework) contained inside of React components. There were 6
              locations originally, which upon loading, download their media
              assets from Azure storage.
            </span>
          </section>

          <section>
            Users are initially greeted with a webpage which contains the
            original 6 locations. Upon clicking on a location, a new page loads
            containing the aFrame scene. Users can click on waypoints to
            traverse the scene, and click on points of interest which are
            denoted by a symbol. These points of interest contain a selection of
            media assets pertaining to a particular object or location. Users
            can also navigate to any of the other 5 locations through a UI
            provided.
          </section>

          <section>
            As mentioned previously, there is the ability to create new
            experiences. I created a small series of videos to aid people in
            this process, as their is some code to write and the dragging and
            dropping of files.
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default XRExperience;
