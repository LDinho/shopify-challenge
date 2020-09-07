import React from 'react';
import './SearchMovies.css';

const SearchMovies = () => {

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
  }

  return (
    <div className="container">

      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Movie Title</label>
        <input className="input" type="text" name="query"
               placeholder="i.e. Rambo"/>
        <button className="button" type="submit">Search</button>
      </form>

    </div>
  );
}

export default SearchMovies;
