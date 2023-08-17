import { useState, useEffect } from "react";
import NextImage, { ImageProps } from "next/image";
import { buildUrl } from "cloudinary-build-url";

const cloud = {
  cloudName: "dvrv27c2t"
};

export default function BlurImage({
  src,
  width,
  height,
  className
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const url = buildUrl(`rohitkistodev/${src}`, { cloud });

  const urlBlurred = buildUrl(`rohitkistodev/${src}`, {
    cloud,
    transformations: {
      effect: {
        name: "blur",
        value: 1000
      },
      quality: 10
    }
  });

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = url;
  }, []);

  return (
    <NextImage
      src={loaded ? url : urlBlurred}
      width={width}
      height={height}
      className={className}
      alt=""
    />
  );
}
