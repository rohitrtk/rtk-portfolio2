import { DragEvent, TouchEvent, useState } from "react";

type UseSwipe = (args: {
  next: (() => void) | null;
  prev: (() => void) | null;
}) => {
  handleTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
  handleTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
};

const useSwipe: UseSwipe = ({ next, prev }) => {
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (
    e: TouchEvent<HTMLDivElement>,
    listener = null,
    useCapture = true
  ) => setTouchPosition((e as TouchEvent).touches[0].clientX);

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
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

  return { handleTouchStart, handleTouchMove };
};

export default useSwipe;
