"use client";

import { usePathname } from "next/navigation";
import BlurImage from "./BlurImage";

interface Props {
  src: string;
}

export default function Backdrop({ src }: Props) {
  const pathname = usePathname();

  return (
    <BlurImage
      src={src}
      width={1920}
      height={1080}
      className="fixed -z-20 grayscale opacity-10 w-screen h-screen inset-0 overflow-hidden"
      fill
      alt=""
    />
  );
}
