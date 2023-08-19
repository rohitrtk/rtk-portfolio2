import { useState, useEffect, useRef, ReactNode, Children } from "react";
import { a, useTransition } from "@react-spring/web";
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
    leave: { opacity: 0, transform: `translateX(${forward ? "-" : ""}101%)` },
    config: {
      duration: 200
    }
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

  const parentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const setParentRefHeight = () => {
      const imgNode = parentRef.current?.getElementsByTagName("img")[0];

      const newHeight = (imgNode as HTMLImageElement).clientHeight || 0;
      parentRef.current!.style.height = `${newHeight}px`;
    };
    setParentRefHeight();

    window.addEventListener("resize", setParentRefHeight);

    return () => window.removeEventListener("resize", setParentRefHeight);
  }, []);

  return (
    <div className="max-w-[1400px] h-auto w-full m-auto p-2 relative group flex flex-col justify-center items-center gap-5 overflow-hidden">
      <div
        className="w-full flex flex-row relative overflow-hidden"
        ref={parentRef}>
        {transitions((style, index) => {
          const Img = Children.toArray(children)[index];

          return (
            <a.div
              className="w-full h-full min-h-full min-w-full absolute"
              style={style}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}>
              {Img}
            </a.div>
          );
        })}
      </div>

      <div
        className="group-hover:block hover:cursor-pointer text-6xl bg-dt-grey bg-opacity-90 border-2 border-dt-light-blue hidden absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 m-auto rounded-full"
        onClick={prev}>
        <ArrowForwardIcon fontSize="inherit" className="rotate-180" />
      </div>
      <div
        className="group-hover:block hover:cursor-pointer text-6xl bg-dt-grey bg-opacity-90 border-2 border-dt-light-blue hidden absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 m-auto rounded-full"
        onClick={next}>
        <ArrowForwardIcon fontSize="inherit" />
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
