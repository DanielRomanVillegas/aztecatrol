import { FormEvent, useRef, useState } from "react";
import { ErrorMessage } from "../ui/ErrorMessage";
import { sendEmail } from "../../helpers";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);
  const handelSubmit = (e: FormEvent) => {
    setIsSending(true);
    e.preventDefault();
    if (form.current) {
      const inputs = form.current.querySelectorAll("input");

      const hasEmptyFields = Array.from(inputs).some(
        (input) => input.value.trim() === ""
      );

      if (hasEmptyFields) {
        setError(true);
        setIsSending(false);
        return;
      }
      sendEmail({ form, setIsSending });

      setError(false);
    }
  };

  return (
    <div className=" mx-auto bg-slate-200 shadow p-5 my-7 rounded portrait:md:w-2/3 landscape:md:w-1/2 landscape:lg:w-1/2">
      {error ? <ErrorMessage message="Los campos no pueden ir vacios" /> : null}
      <form ref={form} onSubmit={handelSubmit}>
        <div className="flex flex-col md:min-w-max p-3 space-y-5">
          <input
            className="text-black w-full p-3 outline-none rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="text-black w-full p-3 outline-none rounded-md"
            type="name"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <textarea
            className="text-black w-full px-3 mr-4 pb-16 pt-4 outline-none rounded-md 
            placeholder:top-20 resize-none overflow-y-auto"
            name="message"
            id="message"
            placeholder="Mensaje"
          />
          <input
            disabled={isSending}
            className="bg-blue-500 rounded py-3 w-full font-bold hover:bg-blue-700 transition-colors disabled:opacity-65 cursor-pointer"
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  );
};
