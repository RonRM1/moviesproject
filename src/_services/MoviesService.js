import axios from "axios";
import { environment } from "../_environmets/environment";

export const MoviesService = {};

MoviesService.getAllMovies = async (page = 1) => {
  const apiUrl = `${environment.BASE_API_URL}/movies`;

  return await axios.get(apiUrl);
};

MoviesService.getSingleMovie = async (id) => {
  const apiUrl = `${environment.BASE_API_URL}/movies/${id}`;
  const res =await axios.get(apiUrl)

  return res;
};
