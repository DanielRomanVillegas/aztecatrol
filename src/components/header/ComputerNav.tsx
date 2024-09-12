import { Link, useLocation } from "react-router-dom";
import { routes } from "../../data/inedx";

export const ComputerNav = () => {
  const location = useLocation();

  console.log({ location });

  return (
    <nav className="text-white font-semibold flex flex-row space-x-8 text-base">
      {routes.map((route) => (
        <Link
          className={`py-1 px-2 ${
            location.pathname === route.to && "bg-white text-black rounded-md"
          }`}
          key={route.name}
          to={route.to}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};
