import { Section } from "../components/ui/Section";

export const HomeView = () => {
  return (
    <div className=" bg-white h-full">
      {/* //*Seccion Sobre nostros */}
      <Section
        bgColor="bg-l-gray"
        hash="L8CGJk}]00O@00EPxunO4TEd%hwH"
        imageUrl="/plataforma.webp"
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
        hash="L8CGJk}]00O@00EPxunO4TEd%hwH"
        imageUrl="/plataforma.webp"
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
        bgColor="bg-l-gray"
        hash="L8CGJk}]00O@00EPxunO4TEd%hwH"
        imageUrl="/plataforma.webp"
        title="¿Quiénes somos?"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </Section>
    </div>
  );
};
