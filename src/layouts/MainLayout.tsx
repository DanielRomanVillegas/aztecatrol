import { PropsWithChildren } from "react";
import { Footer, Header } from "../components";
interface Props extends PropsWithChildren {}

function MainLayout({ children }: Props) {
  //? bg-plataforma bg-cover bg-center bg-no-repeat -- Para brackgound image
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
