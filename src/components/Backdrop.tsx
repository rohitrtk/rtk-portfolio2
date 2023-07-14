"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
}

export default function Backdrop({ src }: Props) {
  return (
    <>
      <Image
        src={src}
        className="sticky top-0 -z-20 grayscale opacity-10"
        fill
        alt=""
      />
    </>
  );
}
