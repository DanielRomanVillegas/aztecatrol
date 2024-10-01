import { HeaderAboutUs, HeaderContactUs, ServiceHeader } from "../components";

export const routes = [
  {
    name: "Principal",
    to: "/",
    component: <h1>Página Principal</h1>,
  },
  {
    name: "Conócenos",
    to: "/about-us",
    component: <HeaderAboutUs />,
  },
  {
    name: "Servicios",
    to: "/services",
    component: <ServiceHeader />,
  },
  {
    name: "Testimonios",
    to: "/testimonials",
    component: <h1>Testimonios de nuestros clientes</h1>,
  },
  {
    name: "Contáctanos",
    to: "/contact",
    component: <HeaderContactUs />,
  },
];
