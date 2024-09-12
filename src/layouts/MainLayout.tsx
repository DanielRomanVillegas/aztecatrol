import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  //? bg-plataforma bg-cover bg-center bg-no-repeat -- Para brackgound image
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
