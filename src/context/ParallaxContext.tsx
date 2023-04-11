import { createContext } from "react";
import type { MutableRefObject } from "react";
import type { IParallax, IParallaxLayer } from "@react-spring/parallax";

export interface ParallaxContextProps {
  parallaxRef: MutableRefObject<IParallax | null> | null;
  scrollToOffset: ((offset: number) => void) | null;
  aboutSectionRef: MutableRefObject<IParallaxLayer | null> | null;
  projectsSectionRef: MutableRefObject<IParallaxLayer | null> | null;
  contactSectionRef: MutableRefObject<IParallaxLayer | null> | null;
}

const ParallaxContext = createContext<ParallaxContextProps>({
  parallaxRef: null,
  scrollToOffset: () => {},
  aboutSectionRef: null,
  projectsSectionRef: null,
  contactSectionRef: null
});

export default ParallaxContext;
