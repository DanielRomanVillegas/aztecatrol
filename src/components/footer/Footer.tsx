import { FooterForn } from "./FooterForn";
import { Map } from "./Map";

export const Footer = () => {
  return (
    <footer className="bg-black text-white md:flex md:justify-around">
      <FooterForn />
      <Map />
    </footer>
  );
};
