import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Carousel
} from "@material-tailwind/react";
import { ExpandMore } from "@mui/icons-material";
import { a } from "@react-spring/web";

import useInvertRotation from "@hooks/useInvertRotation";

import Projects, { Project } from "@components/Projects";

export default function ProjectMenu() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {Projects.map((project, index) => (
        <ProjectDropdown key={`project-${index}`} project={project} />
      ))}
    </div>
  );
}

interface ProjectDropdownProps {
  project: Project;
}

function ProjectDropdown({ project }: ProjectDropdownProps) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((open) => !open);

  const invertionProps = useInvertRotation(open);

  return (
    <Accordion open={open} className="w-full">
      <AccordionHeader
        onClick={toggleOpen}
        className="flex flex-row justify-start text-dt-light-blue hover:text-dt-orange border-b-dt-light-blue">
        <Typography variant="h4" className="font-primary font-bold">
          {project.title}
        </Typography>
        <a.div style={{ ...invertionProps }}>
          <ExpandMore fontSize="large" />
        </a.div>
      </AccordionHeader>
      <AccordionBody>
        <ProjectBody {...project} />
      </AccordionBody>
    </Accordion>
  );
}

function ProjectBody({ title, year, sections, images, tools }: Project) {
  return (
    <div className="justify-center items-center">
      <Carousel className="w-1/2 float-left mb-4 mr-4">
        {images.map((image, index) => (
          <Image
            alt=""
            src={image}
            width="1917"
            height="941"
            key={`carousel-${title}-${index}`}
          />
        ))}
      </Carousel>
      {sections.map((section, index) => (
        <Typography
          variant="paragraph"
          className="font-primary"
          key={`section-${title}-${index}`}>
          {section}
        </Typography>
      ))}
      <div className="flex flex-row justify-around my-10 w-2/3">
        {tools.map((Tool, index) => (
          <div key={`tools-${title}-${index}`}>{Tool}</div>
        ))}
      </div>
    </div>
  );
}
