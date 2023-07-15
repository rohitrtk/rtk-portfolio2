import Image from "next/image";
import { Typography, Carousel, Tooltip } from "@material-tailwind/react";

import type { Project } from "@components/Projects";

export default function ProjectBody({
  title,
  year,
  sections,
  images,
  tools
}: Project) {
  return (
    <div className="justify-center items-center">
      <Carousel className="w-1/2 float-left mb-4 mr-4">
        {images.map((image, index) => {
          return (
            <Image
              alt=""
              src={image}
              placeholder="blur"
              width="1917"
              height="941"
              key={`carousel-${title}-${index}`}
            />
          );
        })}
      </Carousel>
      {sections.map((section, index) => (
        <Typography
          variant="paragraph"
          className="font-primary text-dt-gold"
          key={`section-${title}-${index}`}>
          {section}
        </Typography>
      ))}
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-row justify-around my-10 w-2/3">
          {tools.map(({ name, icon }, index) => (
            <Tooltip
              className="bg-dt-grey text-dt-light-blue"
              content={name}
              key={`tools-${title}-${index}`}>
              {icon}
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
