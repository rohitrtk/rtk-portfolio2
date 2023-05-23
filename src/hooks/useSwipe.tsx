import { MouseEvent, TouchEvent, useState } from "react";

type UseSwipe = (args: {
  next: (() => void) | null;
  prev: (() => void) | null;
}) => {
  handleTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
  handleTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const useSwipe: UseSwipe = ({ next, prev }) => {
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();

    setTouchPosition(e.touches[0].clientX);
    console.log("Handle touch");
  };

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    e.stopPropagation();

    console.log("Handle move");
    if (!touchPosition) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const difference = touchPosition - currentPosition;

    if (difference > 5 && next) {
      // Right
      next();
    } else if (difference < -5 && prev) {
      // Left
      prev();
    }

    setTouchPosition(null);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const { offsetWidth } = e.currentTarget;

    if (e.clientX <= offsetWidth / 2 && prev) {
      prev();
    } else if (next) {
      next();
    }
  };

  return { handleTouchStart, handleTouchMove, handleClick };
};

export default useSwipe;
