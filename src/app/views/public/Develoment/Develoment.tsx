import style from "./Develoment.module.css";
import banner from "../../../../assets/image/1x/bannerRecomendaciones.png";


export const SoftwareDeveloment = () => {

  
  return (
    <>
      <section className={`${style.containner_dev}`}>
      <img src={banner} alt="bannerRecomendaciones.png" width={"100%"} height={"100%"}/>
      </section>
    </>
  );
};
