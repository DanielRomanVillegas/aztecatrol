import { ComputerNav, Logo, MobilNav } from "..";
import { useQuery } from "../../hooks";
import bgImage from "../../../public/plataforma.webp";

export const Header = () => {
  const { isBigScreen, isLandscapeOnMobile } = useQuery();
  return (
    <header className="relative w-full h-screen">
      <img
        loading="eager"
        src={bgImage}
        className="absolute inset-0 w-full h-full brightness-[.30] z-[-1] object-center object-fill"
      />
      <div className="md:h-24 h-20 max-w-[1100px] mx-auto flex items-center flex-row justify-between px-3 ">
        <Logo />
        {isBigScreen && !isLandscapeOnMobile ? <ComputerNav /> : <MobilNav />}
      </div>

      <div
        className={`flex flex-col text-white items-center w-fit mx-auto ${
          isBigScreen && !isLandscapeOnMobile ? "mt-60" : "mt-2"
        } mt-36 max-h-[993px]`}
      >
        <h1 className="font-black text-3xl mb-4">
          BIENVENIDO <br /> AZTECATROL
        </h1>
        <p className="max-w-[895px] text-center leading-6 px-4">
          Somos líderes en soluciones tecnológicas para el diseño de ingeniería
          de pozos. Nos especializamos en ofrecer sistemas avanzados que
          garantizan precisión, seguridad y eficiencia en cada proyecto. Con
          años de experiencia en la industria, nuestro compromiso es brindarte
          herramientas innovadoras que optimicen tus operaciones y lleven tu
          proyecto al siguiente nivel. <br />
          Explora nuestros productos y servicios diseñados para satisfacer las
          necesidades más exigentes del mercado. En AztecaTrol, la excelencia en
          ingeniería es nuestra prioridad.
        </p>
        <a href="#">
          <span>read more</span>
          <i></i>
        </a>
      </div>
    </header>
  );
};
