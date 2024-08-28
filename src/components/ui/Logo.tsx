import { useQuery } from "../../hooks/useQuery";

export const Logo = () => {
  const { isBigScreen, isLandscapeOnMobile } = useQuery();

  return (
    <img
      src="/aztecatrolTextoBlanco.png"
      alt="Logo Aztecatrol"
      className={`${isBigScreen && !isLandscapeOnMobile ? "h-16" : "h-10"}`}
    />
  );
};

("md:h-16 landscape:h-10");
