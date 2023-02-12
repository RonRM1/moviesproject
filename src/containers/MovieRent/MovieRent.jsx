import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../../_services/MovieService";

export default function MovieRent() {
  const [movies, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMovieRent(id);
  }, []);

  const getMovieRent = async (id) => {
    try {
      const res = await MovieService.getMovieRentals(id);
      setMovie(res.data);
      console.log("res.data", res.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  return (
    <div className="movie-list">
      <div className="container pt-5 pb-5">
        <h1 className="h1  mb-5 ">Movies</h1>

        <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
}
