import { useRef } from "react";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";

import CPPIcon from "@assets/icons/cplusplus.svg";
import OpenGLIcon from "@assets/icons/opengl.svg";
import Tooltip from "@components/UI/Tooltip";
import type { ProjectProps } from ".";
import SourceCode from "@components/UI/SourceCode";

// OpenGL Demo
const OGDemo = ({ toggleModal }: ProjectProps) => {
  const title = "Mathematics in 3D Graphics";

  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-1 m-2">
      <Cover title={title} toggleModal={() => toggleModal(modalRef)} />

      <Modal
        ref={modalRef}
        toggleModal={() => toggleModal(modalRef)}
        title={title}>
        <div className="flex flex-row justify-center gap-5">
          <Tooltip text="C++">
            <img src={CPPIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="OpenGL">
            <img src={OpenGLIcon} className="w-10 h-10" />
          </Tooltip>
        </div>
        <div className="flex flex-row justify-center items-center w-full pt-5">
          <SourceCode locked={true} />
        </div>
        <div className="w-full text-left p-10 gap-5 [&>*]:m-5">
          <section>
            <h3 className="text-xl underline">Goal</h3>
            For one of my math courses at the University of Toronto Mississauga,
            I had to give a presentation, outlining a few of the uses of math in
            3D graphics. To accompany my PowerPoint, I thought it'd be nice to
            show a visual, so I wrote this small application to show how
            triangles are used in 3D models, how matricies work in combination
            to give the illusion of transformations, and how math gives the
            illusion of lighting in 3D.
          </section>

          <section>
            <h3 className="text-xl underline">Description</h3>
            <span className="bg-yellow-300 text-black">
              The project uses a combination of C++ and OpenGL for managing the
              window as well as loading the 3D model, lighting, and positions.
            </span>
          </section>

          <section>
            The user of the application will see an airplane rendered in the
            sky. The user also has access to a control panel which can
            manipulate the position, scale, and rotation of the plane. They can
            also in the same control panel, change the strength of the lighting,
            as well as the colour of the lighting.
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default OGDemo;
