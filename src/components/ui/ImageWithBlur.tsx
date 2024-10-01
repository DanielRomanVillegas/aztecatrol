import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

interface ImageWithBlurProps {
  src: string; // URL de la imagen real
  blurhash: string; // Hash BlurHash para la imagen desenfocada
  alt?: string; // Texto alternativo para la imagen
  className?: string; // Clases CSS opcionales
}

export const ImageWithBlur: React.FC<ImageWithBlurProps> = ({
  src,
  blurhash,
  alt,
  className,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => setIsImageLoaded(true), 2000);
    setIsImageVisible(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Mostrar BlurHash mientras la imagen carga */}
      {!isImageLoaded && (
        <Blurhash
          hash={blurhash} // Código BlurHash para el desenfoque
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
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isImageVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
