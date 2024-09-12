import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../data/inedx";

export const usePages = () => {
  const location = useLocation();

  const isMainPage = useMemo(
    () => location.pathname === "/",
    [location.pathname]
  );

  const page = useMemo(
    () => routes.find((ruta) => ruta.to === location.pathname),
    [location.pathname]
  );
  return {
    isMainPage,
    page,
  };
};
