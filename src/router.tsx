import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ContactUsView, HomeView, ServicesView, ErrorView } from "./views";
import { AboutUs } from "./views/AboutUs";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomeView />} path="/" />
          <Route element={<ContactUsView />} path="/contact" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<ServicesView />} path="/services" />
          <Route element={<ServicesView />} path="/testimonials" />
        </Route>

        <Route element={<ErrorView />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
