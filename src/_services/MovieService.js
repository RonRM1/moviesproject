import axios from "axios";
import { environment } from "../_environmets/environment";
import TokenStorageService from "./TokenStorageService";

const MovieService = {};

MovieService.getAllMovies = async (page = 1) => {
  const apiUrl = `${environment.BASE_API_URL}/movies`;

  const token = TokenStorageService.getToken();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.get(apiUrl, config);
};

MovieService.getSingleMovie = async (id) => {
  const apiUrl = `${environment.BASE_API_URL}/movies/${id}`;

  const token = TokenStorageService.getToken();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.get(apiUrl, config);
};

MovieService.rentMovie = async (id) => {
  const apiUrl = `${environment.BASE_API_URL}/movies/${id}/rent`;

  const token = TokenStorageService.getToken();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.post(apiUrl, config);
};

export default MovieService;
