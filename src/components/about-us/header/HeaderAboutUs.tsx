import { BackgroundImage } from "../../header/BackgroundImage";

export const HeaderAboutUs = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center md:flex-row">
      <BackgroundImage
        brightness
        hash="LUIo|IxYI;R+|Es,NxWD5noJRlo2"
        imageUrl="/Gif_banner.gif"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-600 from-2% z-[-1]" /> */}

      <div className="text-center  text-white p-3">
        <h1 className="uppercase font-bold text-3xl">aztecatrol</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum
          neque voluptatem deleniti ipsam nihil molestias quos? Minus beatae
        </p>
      </div>
    </div>
  );
};
