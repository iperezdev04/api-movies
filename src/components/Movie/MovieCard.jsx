import React from "react";

const MovieCard = ({ title, poster_path, release_date }) => {
    return (
        <div className="card" >
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/original/${poster_path}.jpg`} width="256px" height="384px" alt="Card image cap" />
            <div className="card-body">
                {/* <h3>{title}  1</h3> */}
                <span>{release_date} 1</span>
            </div>

        </div>
    );
}

export { MovieCard }