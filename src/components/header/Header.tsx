import { ComputerNav, Logo, MobilNav } from "..";
import { useQuery } from "../../hooks";
import bgImage from "../../../public/plataforma.webp";

export const Header = () => {
  const textAndroid = ` Somos líderes en soluciones tecnológicas para el diseño de ingeniería
          de pozos. Nos especializamos en ofrecer sistemas avanzados que
          garantizan precisión, seguridad y eficiencia en cada proyecto. `;
  const { isPc } = useQuery();
  return (
    <header className="relative min-h-80 w-full h-1/5 overflow-hidden md:h-screen">
      <img
        loading="eager"
        src={bgImage}
        className="absolute inset-0 w-full h-full brightness-[.30] z-[-1] object-center"
      />
      <div className="md:h-24 h-20 max-w-[1100px] mx-auto flex items-center flex-row justify-between px-3 ">
        <Logo />
        {isPc() ? <ComputerNav /> : <MobilNav />}
      </div>

      <div
        className={`flex flex-col text-white items-center w-fit mx-auto ${
          isPc() ? "mt-72" : "mt-2"
        } max-h-[993px]`}
      >
        <h1 className="font-black text-xl  md:text-3xl mb-4">
          BIENVENIDO {isPc() ? <br /> : null} AZTECATROL
        </h1>
        <p className="max-w-[895px] text-center leading-6 px-4 text-ellipsis">
          {isPc() ? (
            <>
              Somos líderes en soluciones tecnológicas para el diseño de
              ingeniería de pozos. Nos especializamos en ofrecer sistemas
              avanzados que garantizan precisión, seguridad y eficiencia en cada
              proyecto. Con años de experiencia en la industria, nuestro
              compromiso es brindarte herramientas innovadoras que optimicen tus
              operaciones y lleven tu proyecto al siguiente nivel. <br />
              Explora nuestros productos y servicios diseñados para satisfacer
              las necesidades más exigentes del mercado. En AztecaTrol, la
              excelencia en ingeniería es nuestra prioridad.
            </>
          ) : (
            <>{textAndroid}</>
          )}
        </p>
        <a href="#">
          <span>read more</span>
          <i></i>
        </a>
      </div>
    </header>
  );
};
