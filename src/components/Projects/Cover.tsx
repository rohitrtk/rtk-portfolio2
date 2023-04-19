import { useContext, useState } from "react";
import { a, useSpring, easings } from "@react-spring/web";
import SectionContext, { SectionContextProps } from "@context/SectionContext";
import Temp from "@assets/images/snp-1.png";

interface Props {
  title: string;
  setModalOpen: (open: boolean) => void;
}

export const Cover = ({ title, setModalOpen }: Props) => {
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

  const { projectsSectionRef } =
    useContext<SectionContextProps>(SectionContext);

  return (
    <a.div
      className="rounded-md relative cursor-pointer flex flex-col align-middle justify-center bg-red-900"
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
      <div className="rounded-md min-w-[320px] min-h-[240px]" />
      {/*<a.img className="" src={Temp} />*/}
      <div className="flex flex-col text-center items-center justify-center absolute w-full opacity-75 bg-neutral-900 p-5">
        <p className="font-body">{title}</p>
      </div>
    </a.div>
  );
};

export default Cover;
