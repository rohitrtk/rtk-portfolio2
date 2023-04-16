import { forwardRef, RefObject } from "react";
import { a } from "@react-spring/web";

import { Project } from "@components/Projects";
import Stripe from "@components/Stripe";
import { useFade } from "@hooks/useFade";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const [fadeRef, style] = useFade();

  const toggleModal = (modalRef: RefObject<HTMLDivElement>) => {
    modalRef.current?.classList.toggle("hidden");
    modalRef.current?.classList.toggle("flex");
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <div
      ref={ref}
      className="w-screen min-h-screen h-auto flex flex-col bg-neutral-900 items-center justify-center sticky top-0 overflow-hidden gap-2">
      <Stripe />
      <a.div ref={fadeRef} style={style} className="shadow-xl rounded-xl p-5">
        <h1 className="md:text-6xl text-4xl font-body overflow-hidden text-center">
          Works
        </h1>
        <div className="p-2 justify-center align-middle container mx-auto max-h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="flex flex-col p-2 md:p-0 md:grid md:grid-cols-3 gap-4 justify-center items-middle">
            <Project.SRForm toggleModal={toggleModal} />
            <Project.XRExperience toggleModal={toggleModal} />
            <Project.RecyclingGame toggleModal={toggleModal} />
            <Project.SudokuSolver toggleModal={toggleModal} />
            <Project.OGDemo toggleModal={toggleModal} />
          </div>
        </div>
      </a.div>
    </div>
  );
});

export default Projects;
