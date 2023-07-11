import { Typography } from "@material-tailwind/react";

import Navbar from "@components/React/RNavbar";
import LineAround from "@components/React/LineAround";

import Test from "@assets/banner-1.jpg";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Navbar />
      <img className="fixed -z-20 grayscale opacity-10" src={Test} />
      <div className="mt-10 w-3/4">
        <LineAround>
          <Typography
            variant="h1"
            className="p-0 text-center text-dt-light-blue relative mx-[1vh] my-auto font-body before:content-none before:min-h-[2px] before:min-w-[50vw] before:bg-black before:absolute before:top-1/2">
            About
          </Typography>
        </LineAround>
        <section className="flex justify-center items-center h-full">
          <Typography className="font-body" variant="h4">
            Hi! I'm Rohit, and I'm a Software Developer. I'm also a graduate of
            the University of Toronto Mississauga. I specialize in building
            full-stack web applications primarily using React, TypeScript, and
            Tailwind. I also have interests in Application Development, API
            Development, Game Development, and Graphics Programming. In my free
            time, I enjoy weight lifting, playing guitar, and reading.
          </Typography>
        </section>
      </div>
    </div>
  );
}
