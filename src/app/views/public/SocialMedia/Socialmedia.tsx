import style from "./Socialmedia.module.css";
import luisamedia from "../../../../assets/image/1x/luisasocialmedia.png";

export const SocialMedia = () => {
  return (
    <>
      <section className={style.containner_socialmedia}>
        <h1>
          <span>Social Media</span>
        </h1>
        <h2>
          <b className={style.textfirst}>¿Quieres</b>
          <b className={style.secondtext}>
            {" "}
            &nbsp; tener un equipo de profesionales &nbsp;{" "}
          </b>{" "}
          <b className={style.therttext}>apasionados, trabajando para &nbsp;</b>
          <b className={style.fourthtext}>
            llevar tu marca al siguiente nivel &nbsp;
          </b>{" "}
          <b className={style.fivetext}>en&nbsp;</b>{" "}
          <b className={style.sixtext}>&nbsp;las redes sociales?&nbsp;</b>
        </h2>
        <p className={style.parragraf}>
          En Hit Data diseñamos estrategias creativas y efectivas que ayudarán a
          que tu marca conecte con audiencia de manera auténtica y obtengas los
          mejores resultados.
        </p>
        <div className={style.img_lu}>
          <img src={luisamedia} alt="luisamedia" height={50} width={50} />
        </div>
        <div className={`row ${style.containner_bottons}`}>
          <div className={`col-6 ${style.botton_one}`}>
            <button className={style.uiverse}>
              <div className={style.wrapper}>
                <span>Conocer los planes</span>
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
          <div className={`col-6`}>
            <button className={style.uiverses}>
              <div className={style.wrappers}>
                <span>Asesoría Personalizada</span>
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
        </div>
      </section>
    </>
  );
};
