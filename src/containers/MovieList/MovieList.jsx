import React, {useEffect, useState } from 'react'
import { MoviesService } from '../../_services/MoviesService';
import Movie from "../../components/Movie/Movie";



export default function MoviesList() {
    //hooks

const [movies, setMovies] = useState([]);
// const [page, setPage] = useState(1);

useEffect(() => {
    getAllMovies();
 }, []);

 //funtions
 const getAllMovies = async () => {
    try {
        const res = await MoviesService.getAllMovies();
        setMovies(res.data.results)
    } catch (error) {
        console.log(error.message || error);
    }
 };

  return (
    <div className="movie-list">
    <div className="container pt-5 pb-5">
       <h1 className="h1  mb-5 ">Movies</h1>

       <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {movies.length > 0 &&
             movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
       </div>
    </div>
 </div>
  );
}