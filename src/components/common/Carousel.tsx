import { useState, useEffect, ReactNode, Children } from "react";
import { a, easings, useTransition } from "@react-spring/web";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useSwipe from "@hooks/useSwipe";

interface Props {
  children: ReactNode;
}

export default function Carousel({ children }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [forward, setForward] = useState(false);
  const numPhotos = Children.toArray(children).length;

  const [transitions, api] = useTransition(activeIndex, () => ({
    from: { opacity: 0, transform: `translateX(${forward ? "" : "-"}101%)` },
    enter: { opacity: 1, transform: `translateX(0%)` },
    leave: { opacity: 0, transform: `translateX(${forward ? "-" : ""}101%)` }
  }));

  const next = () => {
    setForward(true);
    setActiveIndex((activeIndex) =>
      activeIndex + 1 >= numPhotos ? 0 : activeIndex + 1
    );
  };

  const prev = () => {
    setForward(false);
    setActiveIndex((activeIndex) =>
      activeIndex - 1 < 0 ? numPhotos - 1 : activeIndex - 1
    );
  };

  const navigate = (i: number) =>
    setActiveIndex((activeIndex) => {
      setForward(i >= activeIndex);
      return i;
    });

  useEffect(() => {
    api.start();
  }, [activeIndex]);

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe(next, prev);

  return (
    <div className="flex flex-col w-full min-h-full h-full justify-center items-center overflow-hidden">
      <div className="relative sm:w-2/3 w-full flex flex-row overflow-hidden h-full">
        {transitions((style, index) => {
          const Img = Children.toArray(children)[index];
          return (
            <a.div
              className="absolute inset-0"
              style={style}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}>
              {Img}
            </a.div>
          );
        })}
        <div className="sm:block w-full hidden">
          <CarouselArrow
            onClick={next}
            className="absolute flex justify-center items-center bg-opacity-0 opacity-0 hover:bg-opacity-20 hover:opacity-100 bg-dt-grey right-0 top-0 bottom-0 w-1/5 h-full cursor-pointer"
          />
          <CarouselArrow
            onClick={prev}
            flip={true}
            className="absolute flex justify-center items-center bg-opacity-0 opacity-0 hover:bg-opacity-20 hover:opacity-100 bg-dt-grey left-0 top-0 bottom-0 w-1/5 h-full cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-row gap-2 p-2">
        {[...new Array(numPhotos)].map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all content-[''] ${
              activeIndex === i ? "bg-dt-orange" : "bg-dt-light-blue"
            }`}
            onClick={() => navigate(i)}
          />
        ))}
      </div>
    </div>
  );
}

interface CarouselArrowProps {
  onClick: () => unknown;
  className: string;
  flip?: boolean;
}

function CarouselArrow({ onClick, flip, className }: CarouselArrowProps) {
  return (
    <div onClick={onClick} className={className}>
      <ArrowForwardIcon
        className={`text-dt-blue text-5xl ${flip ? "rotate-180" : "rotate-0"}`}
      />
    </div>
  );
}
