import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

//componentes
import { Header } from "./components/Header/header";

//containers
import MovieList from "./containers/MovieList/MovieList";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import MoviesUser from "./containers/MoviesUser/MoviesUser";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import RequireAuth from "./components/Auth/RequireAuth";
import User from "./containers/User/User";
import Register from "./containers/Register/Register";
import Logout from "./containers/Logout/Logout";
import MovieRent from "./containers/MovieRent/MovieRent";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<RequireAuth><MovieList /></RequireAuth>} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/movies/:id/rent" element={<MovieRent />} />
          <Route path="/movies-user" element={<MoviesUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
