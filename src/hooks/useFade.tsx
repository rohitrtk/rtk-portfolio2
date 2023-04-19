import { useState, useEffect, RefObject } from "react";
import { useInView, useSpring } from "@react-spring/web";

const defaultConfig: object = {
  from: { opacity: 0 },
  to: { opacity: 1 },
  config: {
    duration: 1000
  },
  tension: 1
};

export const useFade = (
  config: object | null = null
): [RefObject<any>, object] => {
  const [style, api] = useSpring(() => ({ ...defaultConfig, pause: true }));

  const [viewed, setViewed] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!viewed && inView) {
      api.resume();
      setViewed(true);
    }
  }, [inView]);

  return [ref, style];
};
