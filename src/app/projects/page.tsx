"use client";

import { a } from "@react-spring/web";

import ProjectMenu from "@components/Project/Menu";
import Backdrop from "@components/Backdrop";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

export default function Projects() {
  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start overflow-x-hidden mb-20 md:mb-1">
      <Backdrop src="/banner-2.jpg" />

      <a.div style={pageStyle} className="mt-20 w-3/4">
        <LineTitle text="Projects" />

        <ProjectMenu />
      </a.div>
    </main>
  );
}
