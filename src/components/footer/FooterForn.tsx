import { FormEvent } from "react";

export const FooterForn = () => {
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form action="" onSubmit={handelSubmit}>
      <div className="flex flex-col md:min-w-max p-3 space-y-5">
        <p className="text-lg font-bold">Contactanos</p>
        <input
          className="text-black w-full p-3 mr-4 outline-none rounded-md mb-4"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="text-black w-full p-3 mr-4 outline-none rounded-md mb-4"
          type="name"
          name="name"
          id="name"
          placeholder="Nombre"
        />
        <input
          className="text-black w-full px-3 mr-4 pb-16 pt-4 outline-none rounded-md placeholder:top-20"
          type="text"
          name="menssage"
          id="menssage"
          placeholder="Mensaje"
        />
        <input
          className="bg-blue-500 rounded py-3 w-full font-bold"
          type="submit"
          value="Enviar"
        />
      </div>
    </form>
  );
};
