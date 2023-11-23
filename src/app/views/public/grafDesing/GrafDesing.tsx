import style from "./GrafDesing.module.css";
import banner from "../../../../assets/image/1x/bannerPeliculas.png";


export const GraficDesing = () => {
  return (
    <>
      <section className={`${style.containner_dev}`}>
      <img src={banner} alt="bannerPeliculas.png" width={"100%"} height={"100%"}/>
      </section>
    </>
  );
};
