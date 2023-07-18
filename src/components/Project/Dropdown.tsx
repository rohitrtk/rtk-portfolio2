import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography
} from "@material-tailwind/react";
import { ExpandMore } from "@mui/icons-material";
import { a } from "@react-spring/web";
import dynamic from "next/dynamic";
import { SiGithub } from "@icons-pack/react-simple-icons";

import useInvertRotation from "@hooks/useInvertRotation";
import type { Project } from "@components/Projects";

const DynamicProjectBody = dynamic(() => import("@components/Project/Body"));

interface ProjectDropdownProps {
  project: Project;
}

export default function ProjectDropdown({ project }: ProjectDropdownProps) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((open) => !open);

  const invertionProps = useInvertRotation(open);

  return (
    <Accordion open={open} className="w-[99%]">
      <AccordionHeader className=" border-b-dt-light-blue">
        <div className="flex flex-row justify-between text-dt-light-blue  w-full">
          <div
            className="flex flex-row justify-start items-center hover:text-dt-orange w-full"
            onClick={toggleOpen}>
            <Typography className="lg:text-3xl md:text-xl text-md font-primary font-bold">
              {project.title}
            </Typography>
            <a.div style={{ ...invertionProps }}>
              <ExpandMore fontSize="large" />
            </a.div>
          </div>
          {project.repo ? (
            <a href={project.repo} target="_blank" className="">
              <SiGithub color="#FFFFFF" size={36} />
            </a>
          ) : (
            <></>
          )}
        </div>
      </AccordionHeader>
      <AccordionBody>
        <DynamicProjectBody {...project} />
      </AccordionBody>
    </Accordion>
  );
}
