import React from "react";

export default function MovieItem({isButtonDisabled, movie, handleNomination}){
  const isDisabled = isButtonDisabled(movie);
  const buttonStyle = isDisabled ? "btn-disabled": "button button-nominate";

  return (
    <div className="movie-title">
      <p>{movie.Title} <small className="year">({movie.Year})</small> </p>

      <button className={buttonStyle}
              disabled={isDisabled}
              onClick={() => {
                handleNomination(movie);

              }}>Nominate
      </button>
    </div>
  )
}
