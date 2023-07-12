"use client";

import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { a, useTransition } from "@react-spring/web";

interface Props {
  children: ReactNode;
}

export default function Test({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [transition] = useTransition(pathname, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  }));

  return transition((style, item) => (
    <a.div style={style}>{item ? children : <></>}</a.div>
  ));
}
