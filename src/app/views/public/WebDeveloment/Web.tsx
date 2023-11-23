import style from "./Web.module.css";
import fabianweb from "../../../../assets/image/1x/fabianimg.png"

export const WebDevelopment = () => {
  return (
    <>
      <section className={`${style.containner_web}`}>
        <h1>
          <span>Desarrollo Web</span>
        </h1>
        <h2>
          <b className={style.textfirst}>
            ¿Estás listo para hacer que tu marca
          </b>{" "}
          <b className={style.secondtext}>brille en internet?</b>
        </h2>
        <p className={style.parragraf}>
          Somos un equipo creativo y experto en tecnología, creamos experiencias
          digitales que reflejan la personalidad de tu marca y hacen que
          destaques en la web
        </p>

        <div className={style.img_fa}>
          <img src={fabianweb} alt="famedia.png" height={50} width={50} />
        </div>
        <div className={`${style.containner_bottons}`}>
        <button className={style.uiverse}>
              <div className={style.wrapper}>
                <span>Cotizar</span>
                <div className={`${style.circle} ${style.circle_12}`}></div>
                <div className={`${style.circle} ${style.circle_11}`}></div>
                <div className={`${style.circle} ${style.circle_10}`}></div>
                <div className={`${style.circle} ${style.circle_9}`}></div>
                <div className={`${style.circle} ${style.circle_8}`}></div>
                <div className={`${style.circle} ${style.circle_7}`}></div>
                <div className={`${style.circle} ${style.circle_6}`}></div>
                <div className={`${style.circle} ${style.circle_5}`}></div>
                <div className={`${style.circle} ${style.circle_4}`}></div>
                <div className={`${style.circle} ${style.circle_3}`}></div>
                <div className={`${style.circle} ${style.circle_2}`}></div>
                <div className={`${style.circle} ${style.circle_1}`}></div>
              </div>
            </button>
        </div>
      </section>
    </>
  );
};
