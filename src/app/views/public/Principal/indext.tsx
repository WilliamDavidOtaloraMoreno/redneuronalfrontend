import { Carrousel } from "./Carrousel/Carrousel";
import { WelcomeContact } from "./Contact/WelcomeContact";
import { Banner } from "./banner";

export const Index = () => {
  return (
    <>
      <Banner />
      <WelcomeContact/>
      <Carrousel/>
    </>
  );
};
