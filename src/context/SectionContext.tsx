import { createContext } from "react";
import type { MutableRefObject } from "react";

export interface SectionContextProps {
  introSectionRef: MutableRefObject<HTMLDivElement | null> | null;
  aboutSectionRef: MutableRefObject<HTMLDivElement | null> | null;
  projectsSectionRef: MutableRefObject<HTMLDivElement | null> | null;
  contactSectionRef: MutableRefObject<HTMLDivElement | null> | null;
}

const SectionContext = createContext<SectionContextProps>({
  introSectionRef: null,
  aboutSectionRef: null,
  projectsSectionRef: null,
  contactSectionRef: null
});

export default SectionContext;
