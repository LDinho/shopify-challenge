import React from "react";

export default function NominationItem({movie, handleRemove}){

  return (
    <div className="movie-title">
      <p>{movie.Title} <small className="year">({movie.Year})</small> </p>
      <button className="button button-nominate"
              onClick={() => {
                handleRemove(movie);
              }}>Remove
      </button>
    </div>
  )
}
