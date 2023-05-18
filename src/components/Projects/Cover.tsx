import { useContext, useState } from "react";
import { a, useSpring, easings } from "@react-spring/web";
import SectionContext, { SectionContextProps } from "@context/SectionContext";

import { Card, CardHeader, Typography } from "@material-tailwind/react";

interface Props {
  title: string;
  setModalOpen: (open: boolean) => void;
  coverUrl: string;
}

export const Cover = ({ title, setModalOpen, coverUrl }: Props) => {
  const [hovered, setHovered] = useState(false);

  const style = useSpring({
    filter: hovered ? "grayscale(0.3)" : "grayscale(1)",
    opacity: hovered ? 1 : 0,
    config: {
      friction: 300,
      mass: 200,
      duration: 500,
      easing: easings.linear
    }
  });

  const { projectsSectionRef } =
    useContext<SectionContextProps>(SectionContext);

  const handleClick = () => {
    setModalOpen(true);
    document.body.classList.toggle("overflow-y-hidden");
    const nextSibling = projectsSectionRef?.current?.nextElementSibling;

    if (nextSibling) {
      window.scrollTo({
        top:
          nextSibling.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      className="rounded-md relative cursor-pointer flex flex-col align-middle justify-center border-none"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Card
        shadow={false}
        className="relative grid md:h-[155px] md:w-[190px] lg:h-[240px] lg:w-[290px] h-[240px] w-[290px] items-end justify-center overflow-hidden text-center">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={`absolute inset-0 m-0 h-full w-full rounded-none overflow-hidden`}>
          <a.div
            style={{
              ...style,
              opacity: 1,
              backgroundImage: `url(${coverUrl})`
            }}
            className={`h-full w-full ${coverUrl} bg-cover bg-center bg-no-repeat`}
          />
          <a.div
            style={style}
            className="flex items-center justify-center to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
            <Typography
              variant="h4"
              className="py-2 leading-[1.5] text-blue-gray-400 font-body font-medium bg-neutral-900 w-full">
              {title}
            </Typography>
          </a.div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Cover;
