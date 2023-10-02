import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageLoader = ({ src, hash, alt, height, width }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: loaded ? "none" : "inline" }}>
        <Blurhash
          hash={hash}
          width={width ? width : "100%"}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        style={{
          width: width ? width : "100%",
          display: !loaded ? "none" : "inline",
          height: height ? height : "",
        }}
      />
    </>
  );
};

export default ImageLoader;
