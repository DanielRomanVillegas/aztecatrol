import React from "react";

interface Props {
  letf?: boolean;
}

export const Section = ({ letf }: Props) => {
  return (
    <section
      className={`flex flex-col-reverse md:${
        letf ? "flex-row" : "flex-row-reverse"
      } md:justify-between bg-white w-full p-6 `}
    >
      <div className="md:w-3/6 md:inline-block">
        <h2 className="text-2xl font-bold mb-3 mt-6 md:mt-0">Sobre Nostros</h2>
        <span className="font-bold mb-5">
          Get full range of premium Industrial services for your business
        </span>
        <br />
        <br />
        <p className="mb-7">
          Aztecatrol es una empresa mexicana dedicada al diseño de ingeniería de
          pozos con los más altos estándares de calidad y eficiencia, contando
          con personal de experiencia en la industria del petróleo.
        </p>

        <a className="bg-black text-white p-3 rounded inline-block" href="">
          Saber mas
        </a>
      </div>

      <img
        className="md:w-2/5 md:inline-block rounded"
        src="/plataforma_600.webp"
        alt=""
      />
    </section>
  );
};
