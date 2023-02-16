import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import { environment } from "../../_environmets/environment";
import MovieService from "../../_services/MovieService";

export default function MovieRent() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMovieRent(id);
  }, []);

  const getMovieRent = async (id) => {
    try {
      const res = await MovieService.rentMovie(id);
      setMovie(res.data);
      console.log("res.data", res.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  return (
    
    <div className="movie-list">
      <div className="container pt-5 pb-5">
        <h1 className="h1  mb-5 ">Pelicula rentada</h1>

        <div
            className="backdrop-background"
            style={{
              backgroundImage: `url(${environment.IMAGES_URL})`,
            }}
          ></div>



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

        {/* <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div> */}
      </div>
    </div>
  );
}
