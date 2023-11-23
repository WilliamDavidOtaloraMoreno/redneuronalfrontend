import style from "./AudioVisual.module.css";
import audioimg from "../../../../assets/image/1x/imagenaudio.png";

export const AudioVisual = () => {
  return (
    <>
      <section className={style.containner_Audio}>
        <h1>
          <span>Producción Audio</span>
        </h1>
        <h3>
          <span>Visual</span>
        </h3>
        <div className={`row`}>
          <div className={`col-6 ${style.img_audio}`}>
            <img src={audioimg} alt="audioimg" />
          </div>
          <div className={`col-6`}>
            <h2>
              <b>Desde</b>{" "}
              <b className={style.textfirst}>videos corporativos</b>{" "}
              <b>hasta</b>
              <b className={style.textfirst}> contenido digital</b>
            </h2>
            <p>
              Ofrecemos soluciones visuales de alta calidad que resaltan tu
              mensaje y conectan con tu audiencia
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
