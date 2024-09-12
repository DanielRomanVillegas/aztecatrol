import { usePages, useQuery } from "../../hooks";

export const WelcomeText = () => {
  const { isPc } = useQuery();
  const { isMainPage } = usePages();
  const textAndroid = ` Somos líderes en soluciones tecnológicas para el diseño de ingeniería
          de pozos. `;

  return (
    <div
      className={`flex flex-col text-white w-full h-full ${
        isMainPage ? "items-center justify-center" : "justify-center ml-6"
      }  `}
    >
      {" "}
      <h1 className="font-black text-2xl  md:text-3xl mb-4">
        BIENVENIDO {isPc() && <br />} AZTECATROL
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
            Explora nuestros productos y servicios diseñados para satisfacer las
            necesidades más exigentes del mercado. En AztecaTrol, la excelencia
            en ingeniería es nuestra prioridad.
            <a href="#">
              <span>read more</span>
              <i></i>
            </a>
          </>
        ) : (
          <>{textAndroid}</>
        )}
      </p>
    </div>
  );
};
