import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  letf?: boolean;
  title?: string;
  id?: string;
  button?: boolean;
  //?imageUrl: string;
  //?hash: string;
}

export const Section = ({
  letf,
  title = "lorem",
  children,
  id,
  button,
}: Props) => {
  return (
    //*  md:justify-between antes e cambios
    <section
      id={id}
      className={`flex flex-col-reverse ${
        !letf ? "md:flex-row" : "md:flex-row-reverse"
      } w-full  `}
    >
      <div className="flex md:w-1/2 px-5 pb-5 md:p-5 flex-col justify-center">
        <h2 className="text-2xl font-bold mb-3 mt-6 md:mt-0">{title}</h2>
        <span className="font-bold mb-5">
          Get full range of premium Industrial services for your business
        </span>
        <br />

        <div className="mb-7">{children}</div>

        {button && (
          <a className="bg-black text-white p-3 rounded inline w-fit" href="">
            Saber mas
          </a>
        )}
      </div>
      {/* md:w-2/5 antes ed cambios */}
      <img className="md:w-1/2 md:inline-block" src="/plataforma.webp" alt="" />
      {/* <ImageWithBlur
        className="h-56 md:w-1/2 md:h-96 md:inline-block"
        src={imageUrl}
        blurhash={hash}
      /> */}
    </section>
  );
};
