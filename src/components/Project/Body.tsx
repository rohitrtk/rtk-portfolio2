import { Typography, Carousel, Tooltip } from "@material-tailwind/react";
import BlurImage from "@components/BlurImage";
import type { Project } from "@components/Projects";
import { SiGithub } from "@icons-pack/react-simple-icons";

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
      <Carousel className="md:w-1/2 md:float-left md:mb-2 md:mr-4 md:min-h-auto w-full">
        {images.map((image, index) => {
          return (
            <BlurImage
              alt=""
              src={image}
              placeholder="blur"
              width="1920"
              height="960"
              key={`carousel-${title}-${index}`}
            />
          );
        })}
      </Carousel>
      {sections.map((section, index) => (
        <Typography
          variant="h5"
          className="font-primary text-dt-blue"
          key={`section-${title}-${index}`}>
          {section}
        </Typography>
      ))}
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
        {repo ? (
          <a href={repo} target="_blank">
            <SiGithub color="#FFFFFF" />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
