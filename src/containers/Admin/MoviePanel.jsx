import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../../_services/MovieService";
import UserService from "../../_services/UserService";
import UserStorageService from "../../_services/UserStorageService";

export default function MoviePanel() {
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
