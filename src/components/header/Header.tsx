import { BackgroundImage, ComputerNav, Logo, MobilNav, WelcomeText } from "..";
import { usePages, useQuery } from "../../hooks";

export const Header = () => {
  const { isMainPage, page } = usePages();
  const { isPc } = useQuery();

  return (
    <header
      className={`relative z-10 ${
        !isMainPage && "bg-b-blue"
      } min-h-[33dvh]  w-full overflow-hidden pb-4 ${
        isMainPage
          ? "landscape:h-[70dvh] portrait:h-[33dvh] md:h-[40dvh]  landscape:lg:h-screen"
          : "landscape:h-[70dvh] portrait:h-[33dvh] md:h-[40dvh] landscape:lg:h-[70dvh]"
      }`}
    >
      {isMainPage && (
        <BackgroundImage
          brightness
          hash="L8CGJk}]00O@00EPxunO4TEd%hwH"
          imageUrl="/plataforma.webp"
        />
      )}
      <div className=" max-w-[1500px] mx-auto flex items-center flex-row justify-between px-3">
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
