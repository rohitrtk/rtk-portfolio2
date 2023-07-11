import { Typography } from "@material-tailwind/react";
import { a, useTransition } from "@react-spring/web";

import Navbar from "@components/React/RNavbar";
import LineAround from "@components/React/LineAround";

import Test from "@assets/banner-1.jpg";
import ProjectMenu from "@components/React/UI/ProjectMenu";

interface Props {
  currentUrl?: string;
}

export default function Projects({ currentUrl }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Navbar />
      <img className="fixed -z-20 grayscale opacity-10" src={Test} />
      <div className="mt-10 w-3/4">
        <LineAround>
          <Typography
            variant="h1"
            className="p-0 text-center text-dt-light-blue relative mx-[1vh] my-auto font-body before:content-none before:min-h-[2px] before:min-w-[50vw] before:bg-black before:absolute before:top-1/2">
            Projects
          </Typography>
        </LineAround>
        <ProjectMenu />
      </div>
    </div>
  );
}
