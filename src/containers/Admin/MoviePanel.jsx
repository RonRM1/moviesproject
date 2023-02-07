import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MoviePanel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieRentals();
  }, []);

  const getMovieRentals = async () => {
    try {
      const res = await UserService.getMovieRentals();
      setMovies(res.data.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return  (
    <div>
       <h2>Peliculas Rentadas</h2>

       <div>
          {movies.map((movie) => (
             <div key={movie.movie_id}>{movie.movie_id}</div>
          ))}
       </div>

    </div>
 );
}
