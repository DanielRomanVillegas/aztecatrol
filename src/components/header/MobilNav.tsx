import { useState } from "react";
import MenuIcon from "../ui/MenuIcon";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
        } bg-black min-h-screen fixed top-0 right-0 transition-all duration-300`}
      >
        <div className={`${!openMenu && "hidden"} pt-3`}>
          <button type="button" className="ml-4" onClick={handleCloseSidemenu}>
            <XMarkIcon className="size-8 text-white " />
          </button>
          <nav className="text-white font-semibold flex px-3 flex-col space-y-8 text-base text-center">
            <a href="#home" onClick={handleCloseSidemenu}>
              Home
            </a>

            <a href="#about" onClick={handleCloseSidemenu}>
              About Us
            </a>

            <a href="#ventajas" onClick={handleCloseSidemenu}>
              Services
            </a>

            <a href="#estructura" onClick={handleCloseSidemenu}>
              Testimonials
            </a>

            <a href="#contact" onClick={handleCloseSidemenu}>
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

//  <nav className="flex flex-row-reverse relative w-full">
//    <button type="button" onClick={handleOPenSidemenu}>
//      <MenuIcon />
//    </button>
//    <div className="flex absolute">
//      <li
//        className={`${
//          openMenu ? "flex" : "hidden "
//        }text-white w-full m-1 p-5 justify-center`}
//      ></li>
//      <li
//        className={`${
//          openMenu ? "flex" : "hidden "
//        }text-white w-full m-1 p-5 justify-center`}
//      ></li>
//      <li
//        className={`${
//          openMenu ? "flex" : "hidden "
//        }text-white w-full m-1 p-5 justify-center`}
//      ></li>
//      <li
//        className={`${
//          openMenu ? "flex" : "hidden "
//        }text-white w-full m-1 p-5 justify-center`}
//      ></li>
//      <li
//        className={`${
//          openMenu ? "flex" : "hidden "
//        }text-white w-full m-1 p-5 justify-center`}
//      ></li>
//    </div>
//  </nav>;
