import { useState } from "react";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Hyperlink from "@components/UI/Hyperlink";
import Tooltip from "@components/UI/Tooltip";
import SourceCode from "@components/UI/SourceCode";

import HTMLIcon from "@assets/icons/html.svg";
import CSSIcon from "@assets/icons/css.svg";
import JavaScriptIcon from "@assets/icons/javascript.svg";
import NodeIcon from "@assets/icons/node.svg";
import AFrameIcon from "@assets/icons/aframe.svg";
import ReactIcon from "@assets/icons/react.svg";
import AzureIcon from "@assets/icons/azure.svg";

// XR Experience
const XRExperience = () => {
  const title = "XR Experience";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="flex flex-row justify-center gap-5">
          <Tooltip text="HTML">
            <img src={HTMLIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="CSS">
            <img src={CSSIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="JavaScript">
            <img src={JavaScriptIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="NodeJS">
            <img src={NodeIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="React">
            <img src={ReactIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="aFrame">
            <img src={AFrameIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="Azure">
            <img src={AzureIcon} className="w-10 h-10" />
          </Tooltip>
        </div>
        <div className="flex flex-row justify-center items-center w-full pt-5">
          <SourceCode locked={true} />
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
