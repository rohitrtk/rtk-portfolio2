import { ReactNode, useEffect } from "react";
import { a, useTransition } from "@react-spring/web";

import useAccordionContext from "@hooks/useAccordionContext";

interface Props {
  children: ReactNode;
}

export default function Body({ children }: Props) {
  const { open } = useAccordionContext();

  const [transition, api] = useTransition(open, () => ({
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "flex" },
    leave: { opacity: 0, display: "none" },
    config: {
      duration: 500
    }
  }));

  useEffect(() => {
    api.start();
  }, [open]);

  return (
    <div className="h-auto">
      {transition((style, item) => (
        <a.div style={style} className="relative py-2 overflow-hidden">
          <div className="">{item ? children : <></>}</div>
        </a.div>
      ))}
    </div>
  );
}
