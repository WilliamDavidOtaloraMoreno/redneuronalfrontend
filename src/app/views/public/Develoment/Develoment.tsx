import style from "./Develoment.module.css";
import santiimg from "../../../../assets/image/1x/santiimg.png";
import satiimg2 from "../../../../assets/image/1x/santiimg2.png";

export const SoftwareDeveloment = () => {
  return (
    <>
      <section className={`${style.containner_dev}`}>
        <h1>
          <span>Desarrollo Software</span>
        </h1>
        <div className={`row `}>
          <div className={`col-6 `}>
            <div>
              <img
                className={style.png_send}
                src={satiimg2}
                alt="famedia.png"
                height={50}
                width={50}
              />
              <img src={santiimg} alt="famedia.png" height={50} width={50} />
            </div>
          </div>
          <div className={`col-6 ${style.section_img_text}`}>
            <h2>
              Convertimos <b className={style.textfirst}>tus ideas en</b>{" "}
              experiencias digitales.
            </h2>
            <p className={style.parragraf}>
              Somos expertos en el desarrollo de software que convierte tus
              conceptos en soluciones tecnológicas funcionales y efectivas
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
