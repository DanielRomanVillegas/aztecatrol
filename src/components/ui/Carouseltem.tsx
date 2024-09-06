import { useQuery } from "../../hooks";

export const Carouseltem = () => {
  const { isPc } = useQuery();

  return (
    <div className={`overflow-hidden ${isPc() ? "" : ""} item`}>
      <img
        src="/plataforma.webp"
        className="rounded h-full w-full "
        alt="test"
      />
    </div>
  );
};
