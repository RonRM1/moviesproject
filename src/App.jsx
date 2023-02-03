
import "./App.scss";
//containers
import MoviesList from './containers/MovieList/MovieList';
import MovieDetail from './containers/MovieDetail/MovieDetail';

//componentes
import { Header } from './components/Header/Header';

import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom"
import About from './containers/About/About';
import Login from './containers/Login/Login';
import Admin from './containers/Admin/Admin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
            <Routes>
               <Route path="/" element={<Navigate to="/movies" />} />
               <Route path="/movies" element={<MoviesList />} />
               <Route path="/movies/:id" element={<MovieDetail />} />
               <Route path="/about" element={<About />} />
               <Route path='/login' element={<Login/>}/>
               <Route path='/login' element={<Admin/>}/>
            </Routes>
         </BrowserRouter>
     
    </div>
  );
}

export default App;
