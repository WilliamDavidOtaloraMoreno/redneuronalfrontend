import style from "./WC.module.css";
import { Carousel } from 'react-bootstrap';
import pelicula1 from "../../../../../assets/image/1x/pelicula1.jpg";
import pelicula2 from "../../../../../assets/image/1x/pelicula2.jpg";
import pelicula3 from "../../../../../assets/image/1x/pelicula3.jpg";
import pelicula4 from "../../../../../assets/image/1x/pelicula4.jpg";
import pelicula5 from "../../../../../assets/image/1x/pelicula5.jpg";
import pelicula6 from "../../../../../assets/image/1x/pelicula6.jpg";
import pelicula7 from "../../../../../assets/image/1x/pelicula7.jpg";
import pelicula8 from "../../../../../assets/image/1x/pelicula8.jpg";
import pelicula9 from "../../../../../assets/image/1x/pelicula9.jpg";
import pelicula10 from "../../../../../assets/image/1x/pelicula10.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export const WelcomeContact = () => {
  console.log("que pasas");

  return (
    <>
      <div className="row">
        <div className={`col-6 ${style.welcome} `}>
          <div className={`${style.welcomes}`}>
            <h2>BIENVENIDO AL</h2>
            <h2 className={`${style.next}`}>RECOMENDADOR DE PELICULAS....</h2>

            <p className={`${style.parragraf}`}>
            Sumérgete en una experiencia cinematográfica única con nuestro recomendador de películas impulsado por una avanzada red neuronal. Diseñado para entender tus preferencias y anticiparse a tus gustos, este recomendador te guiará a través de un universo cinematográfico personalizado.
            </p>
          </div>
          <div className={`${style.button_w}`}>
          </div>
        </div>
        <div className="col-6">
          <div className={`${style.form}`}>
          <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula1}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%'}}
            alt="Película 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula2}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula3}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula4}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula5}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 5"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula6}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 6"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula7}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 7"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula8}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 8"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula9}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 9"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pelicula10}
            style={{ maxHeight: '700px', objectFit: 'cover',borderRadius: '2%' }}
            alt="Película 10"
          />
        </Carousel.Item>
      </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
