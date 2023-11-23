import style from "./GrafDesing.module.css";
import pauimg from "../../../../assets/image/1x/pauimg.png";
import pipeimg from "../../../../assets/image/1x/pipeimg.png";
import { useEffect, useState } from "react";
import Movies from "../../../models/Movie";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../util/domains/ApiBack";
import banner from "../../../../assets/image/1x/bannerPeliculas.png";

export const GraficDesing = () => {
  const [arrayMovies, setArrayMovies] = useState<Movies[]>([]);
  const [show, setShow] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(78);

  const [arrayMoviesAll, setArrayMoviesAll] = useState<Movies[]>([]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getAllMovies = async (page: number) => {
    const result = await ServicePrivate.requestGET(
      ApiBack.GET_ALL_MOVIES + `?page=${page}&page_size=${moviesPerPage}`
    );
    setArrayMovies(result);
    console.log(result);
    setShow(false);

    if (Array.isArray(result)) {
      setArrayMovies(result);
      setShow(false);
    } else {
      console.error("La respuesta de la API no es un array:", result);
    }
  };

  const getAllMoviesAll = async () => {
    const results = await ServicePrivate.requestGET(ApiBack.GET_ALL_Movie);
    setArrayMoviesAll(results);
    console.log(results);
    setShow(false);

    if (Array.isArray(results)) {
      setArrayMoviesAll(results);
      setShow(false);
    } else {
      console.error("La respuesta de la API no es un array:", results);
    }
  };

  useEffect(() => {
    getAllMovies(currentPage);
    getAllMoviesAll();
  }, [currentPage]);
  return (
    <>
      <section className={style.containner_grafic}>
        <img
          src={banner}
          alt="bannerPeliculas.png"
          width={"100%"}
          height={"100%"}
        />
        <div className={`row ${style.cardss}`}>
          {arrayMovies.map((myMovies) => (
            <div className={`col-2 ${style.con_card}`}>
              <div className="card" style={{ width: "12rem" }}>
                <img src={myMovies.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">{myMovies.name}</h6>
                  <p className="card-text">{myMovies.gender}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            {(() => {
              const pageCount = Math.ceil(
                arrayMoviesAll.length / moviesPerPage
              );
              const maxPageNumbers = 10; // Puedes ajustar este número según tus preferencias
              const halfMax = Math.floor(maxPageNumbers / 2);
              let startPage = Math.max(currentPage - halfMax, 1);
              let endPage = Math.min(startPage + maxPageNumbers - 1, pageCount);

              // Ajustar el inicio si estamos cerca del final
              startPage = Math.max(endPage - maxPageNumbers + 1, 1);

              const pageNumbers = [];
              for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
              }

              return pageNumbers.map((number) => (
                <li
                  key={number}
                  className={`page-item${
                    currentPage === number ? " active" : ""
                  }`}
                >
                  <a
                    onClick={() => paginate(number)}
                    className="page-link"
                    href="#"
                  >
                    {number}
                  </a>
                </li>
              ));
            })()}
          </ul>
        </nav>
      </section>
    </>
  );
};
