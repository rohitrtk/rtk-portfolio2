"use client";

import LineTitle from "@components/LineTitle";

import usePageTransition from "@hooks/usePageTransition";
import { a } from "@react-spring/web";
import type { Project } from "@components/Projects";
import ProjectBody from "@components/Project";

interface Props {
  project: Project;
}

export default function Skeleton({ project }: Props) {
  const pageStyle = usePageTransition();

  return (
    <a.div style={pageStyle} className="mt-20 w-3/4">
      <LineTitle text={project.title} />

      <ProjectBody {...project} />
    </a.div>
  );
}
