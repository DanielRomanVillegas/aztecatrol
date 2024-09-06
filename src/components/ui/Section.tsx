import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  letf?: boolean;
  title?: string;
  id?: string;
}

export const Section = ({ letf, title = "lorem", children, id }: Props) => {
  console.log({ letf });
  return (
    <section
      id={id}
      className={`flex flex-col-reverse ${
        !letf ? "md:flex-row" : "md:flex-row-reverse"
      } md:justify-between w-full py-6 `}
    >
      <div className="md:w-3/6 md:inline-block">
        <h2 className="text-2xl font-bold mb-3 mt-6 md:mt-0">{title}</h2>
        <span className="font-bold mb-5">
          Get full range of premium Industrial services for your business
        </span>
        <br />
        <br />
        <div className="mb-7">{children}</div>

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
