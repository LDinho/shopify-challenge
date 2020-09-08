import React, { useState } from 'react';
import './SearchMovies.css';
import MovieItem from '../MovieList/MovieItem'
import NominationItem from '../NominationList/NominationItem'

const SearchMovies = () => {
  //tracking state - input query, movies
  const [query, setQuery] = useState('');
  const [movieQueried, setmovieQueried] = useState('');

  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  const isButtonDisabled = (movie) => {
    if (nominations){
      const movieSelected = nominations.find((movieObj) => {
        return movieObj.Title === movie.Title && movieObj.Year === movie.Year;
      });
      if (movieSelected) {
        return true;
      }
    }
  }

  const handleNomination = (movie) => {
    setNominations([movie, ...nominations])
    console.log("nominations array", nominations);
  }

  const handleRemove = (movie) => {
    const updatedNominationList = nominations.filter(movieObj => {
      return movieObj.imdbID !== movie.imdbID;
    });
    setNominations([...updatedNominationList]);
  }

  const onInputChange = e => {
    const { value } = e.target;
    setQuery(value);
    setmovieQueried(value);
  };

  // fetch movies from omdb api
  const searchMovies = async (e) => {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `http://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data  = await res.json();
      // property Search from movie results returned from omdb
      const movieResults = data.Search;
      console.log(movieResults)

      setMovies(movieResults);
      setQuery('');

    } catch (err) {
      console.error(err);
    }

  }

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={searchMovies}>
          <label className="label" htmlFor="query">Movie Title</label>
          <input className="input" type="text"
                 name="query"
                 placeholder="i.e. Jurassic Park..."
                 value={query}
                 onChange={onInputChange}
          />
          <button className="button" type="submit">Search</button>
        </form>
        <div className="wrapper-movies-nominations">
          <div className="movie-list">
            {
              !movies && <p>No movies with that title exists in our database</p>
            }

            <div className="movie-results-title">
              <h2 className="list-title">
                Movie results {movieQueried && (<>for "{movieQueried}" </>)}
              </h2>
            </div>

            {movies && movies.length > 0 && movies.map((movie) => (
              <MovieItem movie={movie}
                         handleNomination={handleNomination}
                         nominations={nominations}
                         isButtonDisabled={isButtonDisabled}
                         key={movie.imdbID}
              />
            ))}
          </div>
          <div className="nomination-list">
            <div className="movie-results-title">
              <h2 className="list-title">
                Nominations
              </h2>
            </div>
            {nominations && nominations.length > 0 && nominations.map((movie) => (
              <NominationItem movie={movie}
                              handleRemove={handleRemove}
                              key={movie.imdbID}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchMovies;
