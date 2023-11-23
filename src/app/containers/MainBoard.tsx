import { InternalRouting } from "../util/routes/InternalRouting";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const MainBoard = () => {
  return (
    <>
      <Header />
      <InternalRouting />
      <Footer />
    </>
  );
};
