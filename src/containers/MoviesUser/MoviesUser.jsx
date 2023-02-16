import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import UserStorageService from "../../_services/UserStorageService";

export default function MoviesUser() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieRentals();
  }, []);

  const getMovieRentals = async () => {
    try {
      const id = UserStorageService.getId();
      const res = await UserService.getMovieRentals(id);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <div>
      <h2>Peliculas Rentadas</h2>

      <div>
        {movies.map((movie) => (
          <div key={movie._id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
}
