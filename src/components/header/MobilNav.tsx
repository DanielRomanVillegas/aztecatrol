import { useState } from "react";
import MenuIcon from "../ui/MenuIcon";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { routes } from "../../data/inedx";

export const MobilNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOPenSidemenu = () => {
    setOpenMenu(true);
    console.log(openMenu);
  };

  const handleCloseSidemenu = () => {
    setOpenMenu(false);
    console.log(openMenu);
  };
  return (
    <div className=" py-3">
      <button type="button" className="ml-4" onClick={handleOPenSidemenu}>
        <MenuIcon />
      </button>

      <div
        onClick={handleCloseSidemenu}
        className={` ${
          !openMenu && "hidden"
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
      ></div>

      <div
        className={`${
          openMenu ? "w-2/3" : "w-0"
        } bg-b-gray min-h-screen fixed top-0 right-0 transition-all duration-300`}
      >
        <div className={`${!openMenu && "hidden"} pt-3`}>
          <button type="button" className="ml-4" onClick={handleCloseSidemenu}>
            <XMarkIcon className="size-8 text-white " />
          </button>
          <nav className="text-white font-semibold flex px-3 flex-col space-y-8 text-base text-center">
            {routes.map((ruta) => (
              <Link key={ruta.name} to={ruta.to} onClick={handleCloseSidemenu}>
                {ruta.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
