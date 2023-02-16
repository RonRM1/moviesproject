import React, { useState, useEffect } from "react";

import "./MovieDetail.scss";

import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../../_services/MovieService";
import { environment } from "../../_environmets/environment";

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleMovie();
  }, []);

  const getSingleMovie = async () => {
    try {
      const res = await MovieService.getSingleMovie(id);
      setMovie(res.data.results);
      console.log("res.data.results", res.data.results);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  const navigate = useNavigate();
  const rent = async (movie) => {
    try {
      console.log(movie);
      const res = await MovieService.rentMovie(movie._id);
      navigate(`/movies/${movie._id}/rent`);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  
  return (
    <>
      {movie.id && (
        <div className="backdrop-container">
          <div
            className="backdrop-background"
            style={{
              backgroundImage: `url(${environment.IMAGES_URL})`,
            }}
          ></div>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={
                    movie.poster_path
                      ? `${environment.IMAGES_URL}/w342${movie.poster_path}`
                      : ""
                  }
                  className="img-fluid mb-4 mb-md-0"
                  alt="..."
                />
              </div>
              <div className="col-md-8 text-start">
                <h1 className="h1 fw-bold  mb-3">
                  {movie.title} <span className="fw-lighter"></span>
                </h1>
                <div className="mb-4">{`Lenguaje y fecha: (${movie.original_language.toUpperCase()}) ${
                  movie.release_date
                }`}</div>
                <div className="mb-4 vote-average">{movie.vote_average}</div>
                <h5 className="fw-bold">Descripcion</h5>
                <p className="fs-5">{movie.overview}</p>
                <div>{`${"Precio Alquiler: "}${movie.price} $`}</div>
                {`${"Votada: "}${movie.vote_count} veces`}
                <div>
                  <div className="mb-4">
                    <button
                      className="btn btn-success"
                      onClick={() => rent(movie)}
                    >
                      Rentar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
