import { useQuery } from "../../hooks";

export const Carouseltem = () => {
  const { isPc } = useQuery();

  return (
    <div className={`overflow-hidden ${isPc() ? "md:h-4/5" : "h-3/4"}`}>
      <img
        src="/plataforma.webp"
        className="rounded h-full w-full "
        alt="test"
      />
    </div>
  );
};
