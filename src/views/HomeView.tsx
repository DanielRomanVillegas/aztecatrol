import { Carousel } from "../components";
import { Section } from "../components/ui/Section";

export const HomeView = () => {
  return (
    <div className=" bg-white">
      {/* //*Seccion Sobre nostros */}
      <Section
        // hash="L8CGJk}]00O@00EPxunO4TEd%hwH"
        // imageUrl="/plataforma.webp"
        id="home"
        title="¿Quiénes somos?"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>
      {/* //*Seccion Nuestros servicios */}
      <Section
        // hash="L8CGJk}]00O@00EPxunO4TEd%hwH"
        // imageUrl="/plataforma.webp"
        id="about"
        letf
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>
      <Section
        // hash="L8CGJk}]00O@00EPxunO4TEd%hwH"
        // imageUrl="/plataforma.webp"
        title="¿Quiénes somos?"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>

      <section className="overflow-hidden pb-6">
        <h2 className="mx-6 text-2xl font-bold">Areas de Competencia</h2>
        <Carousel title="Area 1" />
        {/* <Carouseltem /> */}
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
