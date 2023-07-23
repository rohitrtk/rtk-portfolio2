import { ReactNode } from "react";

import useAccordionContext from "@hooks/useAccordionContext";

interface Props {
  children: ReactNode;
}

export default function Header({ children }: Props) {
  const { setOpen } = useAccordionContext();

  return (
    <div
      className="my-2 border-b-dt-light-blue border-b py-2"
      onClick={() => setOpen((open) => !open)}>
      {children}
    </div>
  );
}
