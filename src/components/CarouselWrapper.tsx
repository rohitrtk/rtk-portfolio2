import { useRef, ReactNode } from "react";
import { Carousel } from "@material-tailwind/react";
import type {
  nextArrow as NextArrow,
  prevArrow as PrevArrow,
  navigation as Navigation
} from "@material-tailwind/react/types/components/carousel";

interface Props {
  children: ReactNode;
}

export default function CarouselWrapper({ children }: Props) {
  const indexHandler = useRef<Parameters<Navigation>[0] | null>(null);

  const handleNavigation: Navigation = ({
    setActiveIndex,
    activeIndex,
    length
  }) => {
    indexHandler.current = { setActiveIndex, activeIndex, length };

    return (
      <div className="absolute -bottom-2 left-1/2 z-50 flex -translate-x-2/4 gap-2">
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

  return (
    <div className="w-full h-full pt-4 pb-10 relative">
      <Carousel
        className="w-full h-full"
        navigation={handleNavigation}
        loop={true}>
        {children}
      </Carousel>
    </div>
  );
}
