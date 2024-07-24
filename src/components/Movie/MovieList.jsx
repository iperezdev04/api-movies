import React from "react";
import { MovieCard } from "./MovieCard";

import "./styles/MovieList.css"

const MovieList = ({ movies }) => {
    // console.log("mOVIES:",movies)
    return (
            <div className="movieList">
                {
                    movies.map(({ id, title,image,release_date,genre }) => (
                        <MovieCard key={id} title={title} release_date={release_date} image={image} genre={genre} />
                    ))
                }
            </div>
    );
}

export { MovieList }