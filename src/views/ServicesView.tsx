import { Carousel } from "../components";

export const ServicesView = () => {
  return (
    <div className="w-full">
      <div className="pl-9 pt-9">
        <h2 className="text-2xl font-bold">Servicos (Áreas de competencia)</h2>
      </div>
      <section className="overflow-hidden mt-6 pb-6">
        <Carousel title="Análisis de Geociencias" />
        <Carousel title="Diseño de Perforación" />
        <Carousel title="Diseño de Terminaciónn" />
        <Carousel title="Diseño de Reparación" />
      </section>
    </div>
  );
};
