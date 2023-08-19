import { Typography, Tooltip } from "@material-tailwind/react";
import Carousel from "@components/common/Carousel";
import BlurImage from "@components/common/BlurImage";
import type { Project } from "@assets/ProjectData";

export default function Body({
  title,
  sections,
  images,
  tools,
  repo
}: Project) {
  return (
    <div className="flex flex-col h-full justify-center items-center">
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
      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        {tools.map(({ name, icon }, index) => (
          <Tooltip
            className="bg-dt-grey text-dt-blue"
            content={name}
            key={`tools-${title}-${index}`}>
            {icon}
          </Tooltip>
        ))}
      </div>
      <div className="py-10">
        {sections.map((section, index) => (
          <Typography
            variant="h5"
            className="font-primary text-dt-blue"
            key={`section-${title}-${index}`}>
            {section}
          </Typography>
        ))}
      </div>
    </div>
  );
}
