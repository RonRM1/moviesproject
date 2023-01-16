import React, { useState, useEffect } from "react";
import { MoviesService } from "../../_services/MoviesService";
import { environment } from "../../_environmets/environment";
import "./MovieDetail.scss";

import { useParams } from "react-router-dom";

export default function MovieDetail() {
   const [movie, setMovie] = useState({});
   const { id } = useParams();

   useEffect(() => {
      getSingleMovie();
   }, []);

   const getSingleMovie = async (id) => {
    console.log("hola")
      try {
         const res = await MoviesService.getSingleMovie(id);
         setMovie(res.data.results);
         console.log("res.data.results", res.data.results);
      } catch (error) {
         console.log(error.message || error);
      }
   };



   return (
      <>
         {movie.id && (
            <div className="detalles">
               
            </div>
         )}
      </>
   );
}