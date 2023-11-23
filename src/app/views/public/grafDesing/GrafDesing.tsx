import style from "./GrafDesing.module.css";
import pauimg from "../../../../assets/image/1x/pauimg.png";
import pipeimg from "../../../../assets/image/1x/pipeimg.png";

export const GraficDesing = () => {
  return (
    <>
      <section className={style.containner_grafic}>
        <h1>
          <span>Diseño Gráfico</span>
        </h1>
        <div className={`row `}>
          <div className={`col-6 ${style.img_pau}`}>
            <img src={pauimg} alt="Paulamedia" height={50} width={50} />
          </div>
          <div className={`col-6 ${style.texth2}`}>
            <h2>
              <b className={style.textfirst}>Damos </b>
              <b className={style.textsecond}>vida a conceptos </b>
              <b className={style.therttext}> y creamos</b>{" "}
              <b className={style.fourthtext}> experiencias visuales</b>{" "}
              <b>que inspiran, cautivan y</b>{" "}
              <b className={style.textsecond}> cuentan historias únicas</b>
            </h2>
            <p>
              Prepárate para explorar el mundo de la expresión gráfica con
              nosotros
            </p>
          </div>
        </div>
        <div className={style.pipe}>
          <img src={pipeimg} alt="pipeimg" height={50} width={50} />
        </div>
      </section>
    </>
  );
};
