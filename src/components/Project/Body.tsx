import { Typography, Tooltip } from "@material-tailwind/react";
import Carousel from "@components/Carousel";
import BlurImage from "@components/BlurImage";
import type { Project } from "@components/Projects";

export default function ProjectBody({
  title,
  year,
  sections,
  images,
  tools,
  repo
}: Project) {
  return (
    <div className="justify-center items-center">
      <div className="md:w-1/2 md:float-left md:mb-2 md:mr-4 md:min-h-auto w-full h-full z-40">
        <Carousel>
          {images.map((image, index) => (
            <BlurImage
              alt=""
              src={image}
              width="1920"
              height="960"
              key={`carousel-${title}-${index}`}
              className="unselectable"
            />
          ))}
        </Carousel>
      </div>
      <div>
        {sections.map((section, index) => (
          <Typography
            variant="h5"
            className="font-primary text-dt-blue"
            key={`section-${title}-${index}`}>
            {section}
          </Typography>
        ))}
      </div>
      <div className="flex flex-col w-full h-auto justify-center items-center">
        <div className="flex md:flex-row flex-wrap justify-center my-10 w-2/3 gap-5">
          {tools.map(({ name, icon }, index) => (
            <Tooltip
              className="bg-dt-grey text-dt-blue"
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
