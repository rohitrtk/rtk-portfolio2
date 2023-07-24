"use client";

import { a } from "@react-spring/web";
import dynamic from "next/dynamic";

import Backdrop from "@components/Backdrop";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

const DyanmicProjectMenu = dynamic(
  () => import("./../../components/Project/Menu")
);

export default function Projects() {
  const pageStyle = usePageTransition();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start mt-10">
      <Backdrop src="/banner-2.jpg" />

      <a.div style={pageStyle} className="mt-20 w-3/4">
        <LineTitle text="Projects" />

        <DyanmicProjectMenu />
      </a.div>
    </main>
  );
}
