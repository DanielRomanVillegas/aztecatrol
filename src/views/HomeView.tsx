import { Carousel } from "../components";
import { Section } from "../components/ui/Section";

export const HomeView = () => {
  return (
    <div className="p-6 bg-white">
      {/* //*Seccion Sobre nostros */}
      <Section letf />
      {/* //*Seccion Nuestros servicios */}
      <Section />

      <Section letf />

      <Section />

      <Section letf />
      <section className="mt-4">
        <h2 className="text-2xl font-bold">Areas de Competencia</h2>
        <Carousel />
      </section>
    </div>
  );
};

{
  /* <h2 className="ml-12 text-6xl font-medium font-sentinel tracking-widest max-w-screen-md text-white">
  Ingeniería de pozos con calidad y eficiencia.
</h2>; */
}
