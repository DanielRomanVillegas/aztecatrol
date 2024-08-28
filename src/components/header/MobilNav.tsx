import { useState } from "react";
import MenuIcon from "../ui/MenuIcon";

export const MobilNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOPenSidemenu = () => {
    setOpenMenu(true);
    console.log(openMenu);
  };
  return (
    <nav className="flex flex-row-reverse relative w-full">
      <button type="button" onClick={handleOPenSidemenu}>
        <MenuIcon />
      </button>
      <div className="flex absolute">
        <li
          className={`${
            openMenu ? "flex" : "hidden "
          }text-white w-full m-1 p-5 justify-center`}
        ></li>
        <li
          className={`${
            openMenu ? "flex" : "hidden "
          }text-white w-full m-1 p-5 justify-center`}
        ></li>
        <li
          className={`${
            openMenu ? "flex" : "hidden "
          }text-white w-full m-1 p-5 justify-center`}
        ></li>
        <li
          className={`${
            openMenu ? "flex" : "hidden "
          }text-white w-full m-1 p-5 justify-center`}
        ></li>
        <li
          className={`${
            openMenu ? "flex" : "hidden "
          }text-white w-full m-1 p-5 justify-center`}
        ></li>
      </div>
    </nav>
  );
};
