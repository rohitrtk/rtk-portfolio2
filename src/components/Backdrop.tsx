"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
}

export default function Backdrop({ src }: Props) {
  return (
    <Image
      src={src}
      className="!fixed -z-20 grayscale opacity-10"
      fill
      alt=""
      placeholder="blur"
    />
  );
}
