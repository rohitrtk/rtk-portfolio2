import { useState, useEffect, ReactNode, Children } from "react";
import { a, useTransition } from "@react-spring/web";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

  return (
    <div className="flex flex-col w-full min-h-full justify-center items-center overflow-hidden">
      <div className="relative min-h-[300px] w-full flex flex-row flex-nowrap whitespace-nowrap will-change-transform overflow-hidden">
        {transitions((style, index) => {
          const Img = Children.toArray(children)[index];
          return (
            <a.div className="absolute" style={style}>
              {Img}
            </a.div>
          );
        })}
        <div
          onClick={next}
          className="absolute flex justify-center items-center opacity-0 hover:opacity-20 bg-black right-0 top-0 bottom-0 w-1/5 h-full">
          <ArrowForwardIcon className="text-dt-blue text-5xl" />
        </div>
        <div
          onClick={prev}
          className="absolute flex justify-center items-center opacity-0 hover:opacity-20 bg-black left-0 top-0 bottom-0 w-1/5 h-full">
          <ArrowForwardIcon className="text-dt-blue text-5xl rotate-180" />
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
