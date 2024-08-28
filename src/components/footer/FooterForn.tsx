import { FormEvent } from "react";

export const FooterForn = () => {
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form action="" onSubmit={handelSubmit}>
      <div className="flex flex-col md:min-w-96  p-3 space-y-5">
        <p className="text-lg font-bold">Contact Us</p>
        <input
          className="text-black p-3 outline-none rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="text-black px-3 pb-16 pt-4 outline-none rounded placeholder:top-20 "
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
