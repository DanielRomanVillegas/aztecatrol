import { Header } from "../components/about-us";

export const routes = [
  {
    name: "Principal",
    to: "/",
    component: <h1>Página Principal</h1>,
  },
  {
    name: "Conócenos",
    to: "/about-us",
    component: <Header />,
  },
  {
    name: "Servicios",
    to: "/services",
    component: <h1>Nuestros Servicios</h1>,
  },
  {
    name: "Testimonios",
    to: "/testimonials",
    component: <h1>Testimonios de nuestros clientes</h1>,
  },
  {
    name: "Contáctanos",
    to: "/contact",
    component: <h1>Contacto</h1>,
  },
];
