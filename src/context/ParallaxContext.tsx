import { createContext } from "react";
import type { MutableRefObject } from "react";
import type { IParallax } from "@react-spring/parallax";

export interface ParallaxContextProps {
  parallaxRef: MutableRefObject<IParallax | null> | null;
  scrollToOffset: ((offset: number) => void) | null;
}

const ParallaxContext = createContext<ParallaxContextProps>({
  parallaxRef: null,
  scrollToOffset: () => {}
});

export default ParallaxContext;
