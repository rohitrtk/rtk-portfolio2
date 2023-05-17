import { useContext, useState } from "react";
import { a, useSpring, easings } from "@react-spring/web";
import SectionContext, { SectionContextProps } from "@context/SectionContext";
import Temp from "@assets/images/snp-1.png";

import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";

interface Props {
  title: string;
  setModalOpen: (open: boolean) => void;
}

export const Cover = ({ title, setModalOpen }: Props) => {
  const [hovered, setHovered] = useState(false);

  const style = useSpring({
    transform: hovered ? "scale(1.025)" : "scale(1)",
    config: {
      friction: 300,
      mass: 500,
      duration: 100,
      easing: easings.easeInCubic
    }
  });

  const { projectsSectionRef } =
    useContext<SectionContextProps>(SectionContext);

  return (
    <a.div
      className="rounded-md relative cursor-pointer flex flex-col align-middle justify-center border-none"
      style={style}
      onClick={() => {
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
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Card
        shadow={false}
        className="relative grid h-[15rem] min-w-[320px] items-end justify-center overflow-hidden text-center">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url(/banner-1.jpg)] bg-contain overflow-hidden`}>
          <div className="flex items-center justify-center to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
            <div className="bg-black w-full bg-opacity-50 flex flex-col items-center justify-center text-center">
              <Typography
                variant="h4"
                className="py-2 leading-[1.5] text-blue-gray-400 font-body font-medium">
                {title}
              </Typography>
            </div>
          </div>
        </CardHeader>
      </Card>
    </a.div>
  );
};

export default Cover;
