"use client";

import { useState, ReactNode } from "react";

import { CurrentAccordionContext } from "@hooks/useAccordionContext";

import Header from "./Header";
import Body from "./Body";

interface Props {
  children: ReactNode;
}

export function Wrapper({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <CurrentAccordionContext.Provider value={{ open, setOpen }}>
      <div className="w-full h-full justify-center items-center">
        {children}
      </div>
    </CurrentAccordionContext.Provider>
  );
}

export default {
  Wrapper,
  Header,
  Body
};
