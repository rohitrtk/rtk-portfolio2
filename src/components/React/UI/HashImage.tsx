import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface Props {
  src: string;
  hash?: string;
  alt?: string;
  className?: string;
}

const HashImage = ({ src, hash, alt = "", className }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
    };

    image.src = src;
  }, [src]);

  return (
    <>
      {!loaded && hash ? (
        <Blurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={className}
        />
      ) : (
        <img src={src} alt={alt} className={className} />
      )}
    </>
  );
};

export default HashImage;
