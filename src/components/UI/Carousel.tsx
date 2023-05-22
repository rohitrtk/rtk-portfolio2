import { useRef, ReactNode } from "react";
import { Carousel as MTCarousel, IconButton } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from "@heroicons/react/24/outline";
import type {
  nextArrow as NextArrow,
  prevArrow as PrevArrow,
  navigation as Navigation
} from "@material-tailwind/react/types/components/carousel";

import useSwipe from "@hooks/useSwipe";
import useMobileView from "@hooks/useMobileView";

interface Props {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  const indexHandler = useRef<Parameters<Navigation>[0] | null>(null);
  const isMobile = useMobileView();

  const handlePrev: PrevArrow = ({ handlePrev }) => {
    return isMobile ? (
      <></>
    ) : (
      <div
        onClick={handlePrev}
        className="!absolute top-2/4 -translate-y-2/4 left-0 bg-white opacity-40 blur-sm hover:bg-neutral-700 min-w-[100px] min-h-full flex items-center justify-center">
        <ChevronLeftIcon
          strokeWidth={4}
          className="w-10 h-10 bg-blue-gray-600"
        />
      </div>
      // <IconButton
      //   variant="text"
      //   color="blue-gray"
      //   size="lg"
      //   onClick={handlePrev}
      //   className="!absolute top-2/4 -translate-y-2/4 left-4">
      //   <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
      // </IconButton>
    );
  };

  const handleNext: NextArrow = ({ handleNext }) => {
    return isMobile ? (
      <></>
    ) : (
      <div
        onClick={handleNext}
        className="!absolute top-2/4 -translate-y-2/4 !right-0 bg-white opacity-40 blur-sm hover:bg-neutral-700 min-w-[100px] min-h-full">
        <ChevronLeftIcon
          strokeWidth={4}
          className="w-10 h-10 bg-blue-gray-600"
        />
      </div>
      // <IconButton
      //   variant="text"
      //   color="blue-gray"
      //   size="lg"
      //   onClick={handleNext}
      //   className="!absolute top-2/4 -translate-y-2/4 !right-4 bg-neutral-800 hover:bg-neutral-700">
      //   <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
      // </IconButton>
    );
  };

  const handleNavigation: Navigation = ({
    setActiveIndex,
    activeIndex,
    length
  }) => {
    indexHandler.current = { setActiveIndex, activeIndex, length };

    return (
      <div className="absolute -bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {[...new Array(length)].map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all content-[''] ${
              activeIndex === i ? "bg-blue-gray-700" : "bg-blue-gray-400"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    );
  };

  const next = () => {
    if (!indexHandler.current) {
      return;
    }

    const { setActiveIndex, activeIndex, length } = indexHandler.current;
    setActiveIndex(activeIndex + 1 >= length ? 0 : activeIndex + 1);
  };

  const prev = () => {
    if (!indexHandler.current) {
      return;
    }

    const { setActiveIndex, activeIndex, length } = indexHandler.current;
    setActiveIndex(activeIndex - 1 < 0 ? length - 1 : activeIndex - 1);
  };

  const { handleTouchStart, handleTouchMove } = useSwipe({
    prev,
    next
  });

  return (
    <MTCarousel
      className="rounded-xl"
      loop={true}
      prevArrow={handlePrev}
      nextArrow={handleNext}
      navigation={handleNavigation}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}>
      {children}
    </MTCarousel>
  );
};

export default Carousel;
