import React from "react";
import { MovieCard } from "./MovieCard";

import "./styles/MovieList.css"

const MovieList = ({ movies }) => {
    // console.log("mOVIES:",movies)
    return (
            <div className="movieList">
                {
                    movies.map(({ id, title,poster_path,release_date }) => (
                        <MovieCard key={id} title={title} release_date={release_date} poster_path={poster_path} />
                    ))
                }
            </div>
    );
}

export { MovieList }