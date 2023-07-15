import type { ReactNode } from "react";
import lqip from "lqip-modern";

interface Props {
  children: ReactNode;
}

export default async function ({ children }: Props) {
  const url = new URL(`http://127.0.0.1:3000/kk-1.png`);
  const imgData = await fetch(url);
  const arrayBuffer = await imgData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBuffer));

  return <>{children}</>;
}
