import React from 'react';
import logo from './logo.svg';
import SearchMovies from './SearchMovies/SearchMovies';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          The Shoppies
        </h1>
      </header>

      <SearchMovies />
    </div>
  );
}

export default App;
