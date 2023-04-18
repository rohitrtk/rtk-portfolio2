import { useState } from "react";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";

import HTMLIcon from "@assets/icons/html.svg";
import CSSIcon from "@assets/icons/css.svg";
import TypeScriptIcon from "@assets/icons/typescript.svg";
import ChakraIcon from "@assets/icons/chakraui.svg";
import FirebaseIcon from "@assets/icons/firebase.svg";
import NextIcon from "@assets/icons/next.svg";
import ReactIcon from "@assets/icons/react.svg";
import Tooltip from "@components/UI/Tooltip";
import SourceCode from "@components/UI/SourceCode";

// Photo sharing app
const PhotoSharer = () => {
  const title = "Photo Sharing Web App";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} />

      {modalOpen ? (
        <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
          <div className="flex flex-row justify-center gap-5">
            <Tooltip text="HTML">
              <img src={HTMLIcon} className="w-10 h-10" />
            </Tooltip>
            <Tooltip text="CSS">
              <img src={CSSIcon} className="w-10 h-10" />
            </Tooltip>
            <Tooltip text="TypeScript">
              <img src={TypeScriptIcon} className="w-10 h-10" />
            </Tooltip>
            <Tooltip text="React">
              <img src={ReactIcon} className="w-10 h-10" />
            </Tooltip>
            <Tooltip text="Next">
              <img src={NextIcon} className="w-10 h-10" />
            </Tooltip>
            <Tooltip text="ChakraUI">
              <img src={ChakraIcon} className="w-10 h-10" />
            </Tooltip>
            <Tooltip text="Firebase">
              <img src={FirebaseIcon} className="w-10 h-10" />
            </Tooltip>
          </div>
          <div className="flex flex-row justify-center items-center w-full pt-5">
            <SourceCode locked={true} />
          </div>
          <div className="w-full text-left p-10 gap-5 [&>*]:m-5">
            <section>
              <h3 className="text-xl underline">Goal</h3>
            </section>

            <section>
              <h3 className="text-xl underline">Description</h3>
            </section>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PhotoSharer;
