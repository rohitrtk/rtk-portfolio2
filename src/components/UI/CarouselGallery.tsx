import { useState } from "react";

import Temp1 from "@assets/images/snp-1.png";
import Temp3 from "@assets/images/snp-2.png";
import Temp2 from "@assets/images/snp-3.png";

import UpArrow from "@assets/icons/up_arrow.svg";

interface Props {
  images: string[];
}

const CarouselGallery = ({ images }: Props) => {
  const [offset, setOffset] = useState(0);

  const handleNext = () => {
    setOffset(() => offset + 1);
  };

  const handlePrev = () => {
    setOffset(() => offset - 1);
  };

  return (
    <div className="relative w-[400px] h-[300px] rounded-lg">
      <button onClick={handleNext}>
        <img
          src={UpArrow}
          className="absolute bg-none border-none top-[50%] z-[100] bg-black opacity-10 rounded-full p-2 -translate-y-1/2 hover:opacity-20 left-1 -rotate-90 "
        />
      </button>
      <button onClick={handlePrev}>
        <img
          src={UpArrow}
          className="absolute bg-none border-none top-[50%] z-[100] bg-black opacity-10 rounded-full p-2 -translate-y-1/2 hover:opacity-20 right-1 rotate-90 "
        />
      </button>
      <ul>
        <li className="absolute inset-0 opacity-0 data-[active]:opacity-100">
          <img
            src={Temp1}
            className="block w-full h-full object-cover object-center"
          />
        </li>
        <li
          data-active
          className="absolute inset-0 opacity-0 data-[active]:opacity-100">
          <img
            src={Temp2}
            className="block w-full h-full object-cover object-center"
          />
        </li>
        <li className="absolute inset-0 opacity-0 data-[active]:opacity-100">
          <img
            src={Temp3}
            className="block w-full h-full object-cover object-center"
          />
        </li>
      </ul>
    </div>
  );
};

export default CarouselGallery;
