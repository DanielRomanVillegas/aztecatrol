import email from "@emailjs/browser";
interface PropsSenEmail {
  form: React.MutableRefObject<HTMLFormElement | null>;
  setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
}
export const sendEmail = ({ form, setIsSending }: PropsSenEmail) => {
  email
    .sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current!,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        setIsSending(false);
        console.log("SUCCESS!");
      },
      (error) => {
        setIsSending(false);
        console.log("FAILED...", error.text);
      }
    );
};
