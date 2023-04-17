import { useState } from "react";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Hyperlink from "@components/UI/Hyperlink";
import Tooltip from "@components/UI/Tooltip";
import SourceCode from "@components/UI/SourceCode";

import PHPIcon from "@assets/icons/php.svg";
import HTMLIcon from "@assets/icons/html.svg";
import CSSIcon from "@assets/icons/css.svg";
import BootstrapIcon from "@assets/icons/bootstrap.svg";
import JavaScriptIcon from "@assets/icons/javascript.svg";
import MySQLIcon from "@assets/icons/mysql.svg";
import CPanelIcon from "@assets/icons/cpanel.svg";
import JQueryIcon from "@assets/icons/jquery.svg";
import { useTransition } from "@react-spring/web";

// Student Registration Form
const SRForm = () => {
  const title = "Student Registration Form";

  const [modalOpen, setModalOpen] = useState(false);

  const transition = useTransition(modalOpen, {
    from: { y: 800, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 800, opacity: 0 }
  });

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} />

      {transition((style, item) =>
        item ? (
          <Modal setModalOpen={setModalOpen} title={title}>
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
              <Tooltip text="Bootstrap">
                <img src={BootstrapIcon} className="w-10 h-10" />
              </Tooltip>
              <Tooltip text="PHP">
                <img src={PHPIcon} className="w-10 h-10" />
              </Tooltip>
              <Tooltip text="jQuery">
                <img src={JQueryIcon} className="w-10 h-10" />
              </Tooltip>
              <Tooltip text="MySQL">
                <img src={MySQLIcon} className="w-10 h-10" />
              </Tooltip>
              <Tooltip text="cPanel">
                <img src={CPanelIcon} className="w-10 h-10" />
              </Tooltip>
            </div>
            <div className="flex flex-row justify-center items-center w-full pt-5">
              <SourceCode locked={true} />
            </div>
            <div className="w-full text-left p-2 gap-5 [&>*]:m-5">
              <section>
                <h3 className="text-xl underline">Goal</h3>
                As a part of my time at{" "}
                <Hyperlink href="https://snpolytechnic.com/">SNP</Hyperlink>, I
                had to design a registration system similiar to{" "}
                <Hyperlink href="https://www.ouac.on.ca/">OUAC</Hyperlink>,
                which, if you don't live in Ontario or in Canada, is what high
                school students use to apply to various post secondary
                institutes in Ontario. The goal was to have students apply
                directly to{" "}
                <Hyperlink href="https://snpolytechnic.com/">SNP</Hyperlink>,
                rather than through{" "}
                <Hyperlink href="https://www.ouac.on.ca/">OUAC</Hyperlink>.
              </section>

              <section>
                <h3 className="text-xl underline">Description</h3>
                <span className="bg-yellow-300 text-black">
                  The project is using a LAMP (Linux, Apache, MySQL, PHP) stack
                  on the backend together with HTML, CSS, and JavaScript with
                  help from Bootstrap and jQuery on the frontend.
                </span>
              </section>

              <section>
                Users of the site can create an account, they will have an email
                of confirmation sent to them upon successful registration. Users
                can then log in, if nit was their first time logging in, they
                will have a message asking for them to change their password (as
                the password is generated by the backend). Users can then enter
                their personal information, things such as:
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
                assigned to them which they can log in with. They can see a list
                of all users who have applied and review the information
                submitted. They can then choose to either accept or decline an
                application.
              </section>
            </div>
          </Modal>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default SRForm;
