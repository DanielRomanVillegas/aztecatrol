import { BackgroundImage, ComputerNav, Logo, MobilNav, WelcomeText } from "..";
import { usePages, useQuery } from "../../hooks";

export const Header = () => {
  const { isMainPage, page } = usePages();
  const { isPc } = useQuery();

  console.log(page);
  return (
    <header
      className={`relative z-10 ${
        !isMainPage && "bg-b-blue"
      } min-h-[27dvh]  w-full overflow-hidden pb-4 ${
        isMainPage
          ? "landscape:h-[100dvh] portrait:h-[45dvh] md:h-[40dvh] landscape:lg:h-screen"
          : `landscape:h-[100dvh] portrait:h-[45dvh] md:h-[40dvh] landscape:lg:h-[70dvh] ${
              page?.to === "/contact" &&
              "portrait:h-[27dvh] landscape:h-[50dvh] landscape:lg:h-[32dvh]"
            }`
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
