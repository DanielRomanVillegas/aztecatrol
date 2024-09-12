import { useMediaQuery } from "react-responsive";

export const useQuery = () => {
  //! Origuinal de isBigScreen "(min-width:768px) and (min-height: 600px)";
  const isBigScreen = useMediaQuery({
    query: "(min-width:1024px) and (min-height: 700px)",
  });
  const isLandscapeOnMobile = useMediaQuery({
    query: "(orientation: landscape) and (max-width: 900px)",
  });

  const isPc = () => isBigScreen && !isLandscapeOnMobile;

  return { isPc, isLandscapeOnMobile, isBigScreen };
};
