import { useState, useEffect, useRef } from "react";
import { a, useTransition, easings } from "@react-spring/web";

import Temp1 from "@assets/images/snp-1.png";
import Temp3 from "@assets/images/snp-2.png";
import Temp2 from "@assets/images/snp-3.png";

import UpArrow from "@assets/icons/up_arrow.svg";

interface Props {
  images: string[];
}

const temp = [Temp1, Temp2, Temp3];

type TDirection = 1 | -1;

const CarouselGallery = ({ images }: Props) => {
  const [active, setActive] = useState(0);
  const [disable, setDisabled] = useState(false);
  const [direction, setDirection] = useState<TDirection>(1);

  const transitions = useTransition(active, {
    key: active,
    initial: { x: 0 },
    from: { x: direction * 300 },
    enter: { x: 0 },
    leave: { x: -direction * 300 },
    onRest: () => {
      setDisabled(false);
    },
    config: {
      duration: 250,
      mass: 0.5,
      tension: 170,
      friction: 26,
      easing: easings.easeInOutCubic
    }
  });

  const handleNext = () => {
    setDirection(-1);
    setDisabled(true);
    setActive(() => (active + 1) % temp.length);
  };

  const handlePrev = () => {
    setDirection(1);
    setDisabled(true);
    setActive(() => (active + (temp.length - 1)) % temp.length);
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-[400px] h-[300px] overflow-hidden">
        <button onClick={handlePrev} disabled={disable}>
          <img
            src={UpArrow}
            className="absolute bg-none border-none top-[50%] z-[100] bg-black opacity-10 rounded-full p-2 -translate-y-1/2 hover:opacity-20 left-1 -rotate-90 "
          />
        </button>
        <button onClick={handleNext} disabled={disable}>
          <img
            src={UpArrow}
            className="absolute bg-none border-none top-[50%] z-[100] bg-black opacity-10 rounded-full p-2 -translate-y-1/2 hover:opacity-20 right-1 rotate-90 "
          />
        </button>

        {transitions((style, i) => (
          <a.img
            src={temp[i]}
            style={style}
            className="block w-full h-full object-cover object-center absolute overflow-none drag-none"
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center p-1 m-1">
        {temp.map((t, i) => (
          <span
            key={i}
            className={`items-center flex w-3 h-3 ${
              i === active ? "bg-gray-800" : "bg-gray-600"
            } rounded-full m-1`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselGallery;
