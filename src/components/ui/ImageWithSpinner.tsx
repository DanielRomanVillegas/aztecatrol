import { FC, useState } from "react";
import { SpinnerLoader } from "..";

interface Props {
  src: string;
  alt: string;
  customStyle?: string;
}

export const ImageWithSpinner: FC<Props> = ({ src, alt, customStyle }) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si la imagen está cargando

  // Handler cuando la imagen se carga
  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative w-full ${customStyle}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Spinner de carga */}
          <SpinnerLoader />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
        className={`transition-opacity h-full w-full duration-500 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};
