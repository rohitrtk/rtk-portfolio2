"use client";

import { a } from "@react-spring/web";

import Preview from "@components/Project/Preview";
import Backdrop from "@components/Backdrop";
import LineTitle from "@components/LineTitle";
import usePageTransition from "@hooks/usePageTransition";

import projects from "@components/Projects";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Projects() {
  const pageStyle = usePageTransition();

  return (
    <>
      <Backdrop src="/banner-2.jpg" />

      <main className="w-full h-full flex flex-col items-center justify-start overflow-x-hidden mb-20 md:mb-1">
        <a.div style={pageStyle} className="mt-20 w-3/4">
          <LineTitle text="Projects" />

          {projects.map((project, index) => (
            <div key={`project-preview-${index}`} className="my-10">
              <Preview
                title={project.title}
                desc={project.description}
                previewImage={project.images[0]}
                href={`/projects/${project.href}`}
              />
            </div>
          ))}
        </a.div>
      </main>
    </>
  );
}
