"use client";

import LineTitle from "@components/common/LineTitle";

import usePageTransition from "@hooks/usePageTransition";
import { a } from "@react-spring/web";
import type { Project } from "@assets/ProjectData";
import Body from "./Body";

interface Props {
  project: Project;
}

export default function Skeleton({ project }: Props) {
  const pageStyle = usePageTransition();

  return (
    <a.div style={pageStyle} className="mt-20 w-3/4">
      <LineTitle text={project.title} />

      <Body {...project} />
    </a.div>
  );
}
