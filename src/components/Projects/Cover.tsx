import { RefObject, useState } from "react";
import { a, useSpring, easings } from "@react-spring/web";
import Temp from "@assets/images/snp-1.png";
import type { ProjectProps } from ".";

interface Props extends ProjectProps {
  title: string;
  toggleModal: () => void;
}

export const Cover = ({ title, toggleModal }: Props) => {
  const [hovered, setHovered] = useState(false);

  const style = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    config: {
      friction: 300,
      mass: 500,
      duration: 100,
      easing: easings.easeInCubic
    }
  });

  return (
    <a.div
      className="rounded-md relative cursor-pointer flex flex-col align-middle justify-center bg-red-900"
      style={style}
      onClick={toggleModal}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="rounded-md min-w-[320px] min-h-[240px]" />
      {/*<a.img className="" src={Temp} />*/}
      <div className="flex flex-col text-center items-center justify-center absolute w-full opacity-75 bg-neutral-900 p-5">
        <p className="font-body">{title}</p>
      </div>
    </a.div>
  );
};

export default Cover;
