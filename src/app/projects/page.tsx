"use client";

import Image from "next/image";
import { Typography } from "@lib/MT";

import Navbar from "@components/Navbar";
import LineAround from "@components/LineAround";

import Test from "@assets/banner-1.jpg";
import ProjectMenu from "@components/ProjectMenu";

export default function Projects() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Image alt="" className="fixed -z-20 grayscale opacity-10" src={Test} />

      <div className="mt-20 w-3/4">
        <LineAround>
          <Typography
            variant="h1"
            className="p-0 text-center text-dt-light-blue relative mx-[1vh] my-auto font-primary before:content-none before:min-h-[2px] before:min-w-[50vw] before:bg-black before:absolute before:top-1/2">
            Projects
          </Typography>
        </LineAround>
        <ProjectMenu />
      </div>
    </div>
  );
}
