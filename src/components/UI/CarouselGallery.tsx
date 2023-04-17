import { useState, useEffect, useRef } from "react";

import Temp1 from "@assets/images/snp-1.png";
import Temp3 from "@assets/images/snp-2.png";
import Temp2 from "@assets/images/snp-3.png";

import UpArrow from "@assets/icons/up_arrow.svg";

interface Props {
  images: string[];
}

const temp = [Temp1, Temp2, Temp3];

const CarouselGallery = ({ images }: Props) => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  const handleNext = () => {
    setActive(() => (active + 1) % temp.length);
  };

  const handlePrev = () => {
    setActive(() => (active + (temp.length - 1)) % temp.length);
  };

  const refs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    refs.current[active].setAttribute("data-active", "");
    if (active !== prev) {
      refs.current[prev].removeAttribute("data-active");
      setPrev(active);
    }
  }, [active]);

  return (
    <div className="flex flex-col">
      <div className="relative w-[400px] h-[300px] rounded-lg">
        <button onClick={handlePrev}>
          <img
            src={UpArrow}
            className="absolute bg-none border-none top-[50%] z-[100] bg-black opacity-10 rounded-full p-2 -translate-y-1/2 hover:opacity-20 left-1 -rotate-90 "
          />
        </button>
        <button onClick={handleNext}>
          <img
            src={UpArrow}
            className="absolute bg-none border-none top-[50%] z-[100] bg-black opacity-10 rounded-full p-2 -translate-y-1/2 hover:opacity-20 right-1 rotate-90 "
          />
        </button>
        <ul>
          {temp.map((src, i) => (
            <li
              key={i}
              ref={(el) => (refs.current[i] = el!)}
              className="absolute inset-0 opacity-0 data-[active]:opacity-100">
              <img
                src={src}
                className="block w-full h-full object-cover object-center"
              />
            </li>
          ))}
        </ul>
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
