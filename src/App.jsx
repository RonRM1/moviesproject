import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

//componentes
import { Header } from "./components/Header/header";

//containers
import MovieList from "./containers/MovieList/MovieList";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import About from "./containers/About/About";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import RequireAuth from "./components/Auth/RequireAuth";
import User from "./containers/User/User";
import Register from "./containers/Register/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<RequireAuth><MovieList /></RequireAuth>} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
