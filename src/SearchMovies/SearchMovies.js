import React from 'react';
import './SearchMovies.css';

const SearchMovies = () => {

  const searchMovies = async (e) => {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const query = 'Jurassic Park'
    const url = `http://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data  = await res.json();
      console.log(data);

    } catch (err) {
      console.error(err);

    }

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
