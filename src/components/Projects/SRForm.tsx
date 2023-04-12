import Modal from "@components/UI/Modal";
import { useRef } from "react";

import PHPIcon from "@assets/icons/php.svg";
import HTMLIcon from "@assets/icons/html.svg";
import CSSIcon from "@assets/icons/css.svg";
import BootstrapIcon from "@assets/icons/bootstrap.svg";
import JavascriptIcon from "@assets/icons/javascript.svg";
import MySQLIcon from "@assets/icons/mysql.svg";
import CPanelIcon from "@assets/icons/cpanel.svg";
import JQueryIcon from "@assets/icons/jquery.svg";
import Cover from "./Cover";

// Student Registration Form
const SRForm = () => {
  const title = "Student Registration Form";

  const toggleModal = () => {
    modalRef.current?.classList.toggle("hidden");
    modalRef.current?.classList.toggle("block");
  };

  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Cover title={title} toggleModal={toggleModal} />

      <Modal
        ref={modalRef}
        toggleModal={toggleModal}
        title="Student Registration Form">
        <div className="flex flex-row justify-center gap-5">
          <img src={HTMLIcon} className="w-10 h-10" />
          <img src={CSSIcon} className="w-10 h-10" />
          <img src={JavascriptIcon} className="w-10 h-10" />
          <img src={BootstrapIcon} className="w-10 h-10" />
          <img src={PHPIcon} className="w-10 h-10" />
          <img src={JQueryIcon} className="w-10 h-10" />
          <img src={MySQLIcon} className="w-10 h-10" />
          <img src={CPanelIcon} className="w-10 h-10" />
        </div>
        <div className="text-left">
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </Modal>
    </>
  );
};

export default SRForm;
