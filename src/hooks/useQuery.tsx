import { useMediaQuery } from "react-responsive";

export const useQuery = () => {
  const isBigScreen = useMediaQuery({
    query: "(min-width:768px) and (min-height: 600px)",
  });
  const isLandscapeOnMobile = useMediaQuery({
    query: "(orientation: landscape) and (max-width: 768px)",
  });

  const isPc = () => isBigScreen && !isLandscapeOnMobile;

  return { isPc };
};
