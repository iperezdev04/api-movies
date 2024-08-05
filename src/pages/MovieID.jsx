import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieID = () => {
    const { id } = useParams();
    const [movie,setMovie] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=74ff8c1985aa1013b1b3f2b52880011c`

    useEffect(() => {
        fetchMovieById();
    }, []);


    const fetchMovieById= () =>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setMovie({
                id:data.id,
                title:data.title,
                overview:data.overview,
                poster_path:data.poster_path
            });
              
        })

        .catch(error => {
            console.error(error);
        });    
    }
   

    // console.log(movie.title)

    return (
        <div className="movie">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
    );
}

