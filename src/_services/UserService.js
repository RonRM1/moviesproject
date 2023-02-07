import axios from "axios";
import { environment } from "../_environmets/environment";
import TokenStorageService from "./TokenStorageService";

const UserService = {};

UserService.getAllUsers = async () => {
  const apiUrl = environment.BASE_API_URL + "/users";
  const token = TokenStorageService.getToken();
  console.log(token);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.get(apiUrl, config);
};

UserService.getMovieRentals = async () => {
  const apiUrl = `${environment.BASE_API_URL}/users/${id}/movies`;
  const token = TokenStorageService.getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios.post(apiUrl, config);
};
export default UserService;
