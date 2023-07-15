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
        <DynamicProjectBody {...project} />
      </AccordionBody>
    </Accordion>
  );
}
