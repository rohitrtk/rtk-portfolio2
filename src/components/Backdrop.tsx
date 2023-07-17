"use client";

import BlurImage from "./BlurImage";

interface Props {
  src: string;
}

export default function Backdrop({ src }: Props) {
  return (
    <BlurImage
      src={src}
      width={1920}
      height={1080}
      className="!fixed -z-20 grayscale opacity-10 w-full h-full"
      fill
      alt=""
    />
  );
}
