import { useEffect } from "react";
import { useSpring } from "@react-spring/web";

export default function usePageTransition() {
  const [style, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 }
  }));

  useEffect(() => {
    api.start();

    return () => {
      api.apply({
        from: { opacity: 1 },
        to: { opacity: 0 }
      });

      api.start();
    };
  }, []);

  return style;
}
