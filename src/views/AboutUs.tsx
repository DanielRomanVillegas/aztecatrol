import { SectionAboutUs } from "../components/about-us/body/SectionAboutUs";

export const AboutUs = () => {
  return (
    <div className=" bg-white">
      {/* //*Seccion Sobre nostros */}
      <SectionAboutUs id="home" title="¿Quiénes somos?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </SectionAboutUs>
      {/* //*Seccion Nuestros servicios */}
      <SectionAboutUs id="about" letf>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </SectionAboutUs>
      <SectionAboutUs title="¿Quiénes somos?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime ipsa officia quod aliquid cumque dolor, dolorum vel vero rem
          atque? In tenetur obcaecati tempora velit a rem placeat sed.
        </p>
      </SectionAboutUs>
    </div>
  );
};