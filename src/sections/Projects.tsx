import { a } from "@react-spring/web";

import { Project } from "@components/Projects";
import { useFade } from "@hooks/useFade";
import Stripe from "@components/Stripe";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <a.div
      ref={ref}
      className="w-screen min-h-screen h-auto flex flex-col bg-neutral-900 items-center justify-center sticky top-0 overflow-hidden gap-2">
      <div className="shadow-xl rounded-xl p-5">
        <h1 className="md:text-6xl text-4xl font-body overflow-hidden">
          <Stripe />
          Works
        </h1>
        <div className="p-2 justify-center align-middle container mx-auto max-h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="flex flex-col p-2 md:p-0 md:grid md:grid-cols-3 gap-4 justify-center align-middle overflow-auto">
            <Project.SRForm />
            <Project.XRExperience />
            <Project.RecyclingGame />
            <Project.SudokuSolver />
            <Project.OGDemo />
          </div>
        </div>
      </div>
    </a.div>
  );
});

export default Projects;
