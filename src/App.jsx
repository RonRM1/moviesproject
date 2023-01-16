import { useState } from 'react'
import MoviesList from './containers/MoviesList/MoviesList';
import MovieDetail from './containers/MovieDetail/MovieDetail';

//componentes
import { Header } from './components/Header/Header';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom"
import {  } from "./containers/MoviesList/MoviesList";
import About from './containers/About/About';



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
            </Routes>
         </BrowserRouter>
     
    </div>
  );
}

export default App;
