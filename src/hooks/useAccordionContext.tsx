import { createContext, useContext, SetStateAction, Dispatch } from "react";

interface AccordionContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CurrentAccordionContext = createContext<AccordionContext | null>(
  null
);

export default function useAccordionContext() {
  const currentAccordionContext = useContext(CurrentAccordionContext);

  if (!currentAccordionContext) {
    throw new Error(
      "useAccordionContext needs to be used within <CurrentAccordionContext.Provider>"
    );
  }

  return currentAccordionContext;
}
