import { useState, TouchEvent } from "react";

type SwipeFunction = () => unknown;

export default function useSwipe(
  swipeLeft: SwipeFunction,
  swipeRight: SwipeFunction
) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const swipeDistance = 50;

  const onTouchStart = (e: TouchEvent<HTMLElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: TouchEvent<HTMLElement>) => {
    if (!touchStart || !touchEnd) {
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > swipeDistance;
    const isRightSwipe = distance < -swipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      console.log("swipe", isLeftSwipe ? "left" : "right");

      if (isLeftSwipe) {
        swipeLeft();
      } else if (isRightSwipe) {
        swipeRight();
      }
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}
