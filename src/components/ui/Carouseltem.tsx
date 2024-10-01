import { ImageWithSpinner } from "..";

export const Carouseltem = () => {
  return (
    <div className={`overflow-hidden item rounded`}>
      <ImageWithSpinner
        alt="Test"
        src="/plataforma.webp"
        customStyle="rounded h-full w-full"
      />
    </div>
  );
};
