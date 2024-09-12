import { ComputerNav, Logo, MobilNav, WelcomeText } from "..";
import { usePages, useQuery } from "../../hooks";

//max-h-[993px]

//!Margib vertical del texto en el header
// ${
//           isPc() ? "lg:mt-72 md:my-10" : "mt-2"
//         }

export const Header = () => {
  const { isMainPage, page } = usePages();
  const { isPc } = useQuery();
  return (
    <header
      className={`relative ${
        !isMainPage && "bg-b-blue"
      } min-h-[33dvh]  w-full overflow-hidden pb-4 ${
        isMainPage
          ? "landscape:h-[70dvh] portrait:h-[33dvh] md:h-[40dvh]  landscape:lg:h-screen"
          : "landscape:h-[70dvh] portrait:h-[33dvh] md:h-[40dvh] landscape:lg:h-[65dvh]"
      }`}
    >
      {isMainPage && (
        <img
          loading="eager"
          src="/plataforma.webp"
          className="absolute inset-0 w-full h-full brightness-[.30] z-[-1] object-center"
        />
      )}
      <div className=" max-w-[1100px] mx-auto flex items-center flex-row justify-between px-3">
        <Logo />
        {isPc() ? <ComputerNav /> : <MobilNav />}
      </div>

      <div
        style={{
          height: `calc(100% - 11% - 1.5rem)`,
        }}
      >
        {isMainPage ? <WelcomeText /> : page?.component}
      </div>
    </header>
  );
};
