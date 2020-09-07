import React, { useState } from "react";

export default function MovieList({movie, handleNomination}){

  const [isDisabled, setDisable] = useState(false);
  const buttonStyle = isDisabled ? "btn-disabled": "button button-nominate"

  return (
    <div className="movie-title">
      <p>{movie.Title} <small className="year">({movie.Year})</small> </p>
      <button className={buttonStyle}
              disabled={isDisabled}
              onClick={() => {
                handleNomination(movie);
                setDisable(true);

              }}>Nominate
      </button>
    </div>
  )
}
