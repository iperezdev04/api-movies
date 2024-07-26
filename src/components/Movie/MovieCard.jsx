import React from "react";

const MovieCard = ({ title, image, release_date, genre }) => {
    return (
        <div className="card" >
            <img className="card-img-top" src={image} width="256px" height="384px" alt="Card image cap" />
            <div className="card-body">
                {/* <h3>{title} </h3> */}
                {/* <span>{release_date}</span> */}
                <div className="genre-box">
                    {genre.map(genre => (
                        <span key={genre.id}>{genre.name}</span>
                    ))}
                </div>
            </div>

        </div>
    );
}

export { MovieCard }