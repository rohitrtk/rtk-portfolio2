"use client";

import { a } from "@react-spring/web";

import Backdrop from "@components/Backdrop";
import ProjectMenu from "@components/ProjectMenu";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

import Test from "@assets/banner-1.jpg";

export default function Projects() {
  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start mt-10">
      <Backdrop src={Test} />

      <a.div style={pageStyle} className="mt-20 w-3/4">
        <LineTitle text="Projects" />
        <ProjectMenu />
      </a.div>
    </main>
  );
}
