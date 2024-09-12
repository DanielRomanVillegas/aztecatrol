import { FC, useState } from "react";
import { Blurhash } from "react-blurhash";

interface Props {
  imageUrl: string;
  hash: string;
  brightness?: boolean;
}

export const BackgroundImage: FC<Props> = ({ hash, imageUrl, brightness }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => setIsImageLoaded(true), 2000);
    setIsImageVisible(true);
  };
  return (
    <div className="absolute inset-0 w-full h-full z-[-2]">
      {/* Mostrar BlurHash mientras la imagen carga */}
      {!isImageLoaded && (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="absolute inset-0 w-full h-full"
        />
      )}
      {/* Imagen real con transición suave */}
      <img
        loading="eager"
        src={imageUrl}
        onLoad={handleImageLoad}
        className={`absolute inset-0 w-full h-full ${
          brightness && "brightness-[.30]"
        } object-center transition-opacity duration-700 ${
          isImageVisible ? "opacity-100" : "opacity-0"
        }`}
        alt="Plataforma"
      />
    </div>
  );
};
