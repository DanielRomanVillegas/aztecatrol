import { Carousel, Carouseltem } from "../components";
import { Section } from "../components/ui/Section";

export const HomeView = () => {
  return (
    <div className="p-6 bg-white">
      {/* //*Seccion Sobre nostros */}
      <Section id="home" title="¿Quiénes somos?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>
      {/* //*Seccion Nuestros servicios */}
      <Section id="about" letf>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>
      <Section title="¿Quiénes somos?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>

      <Section letf>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>

      <Section title="¿Quiénes somos?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>
      <section className="mt-4 bg-red-700 overflow-hidden">
        <h2 className="text-2xl font-bold">Areas de Competencia</h2>
        <Carousel />
        {/* <Carouseltem /> */}
      </section>
    </div>
  );
};

{
  /* <h2 className="ml-12 text-6xl font-medium font-sentinel tracking-widest max-w-screen-md text-white">
  Ingeniería de pozos con calidad y eficiencia.
</h2>; */
}
