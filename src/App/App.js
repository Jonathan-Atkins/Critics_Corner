import './App.css';
import searchIcon from '../icons/search.png';
import Movies from '../MoviesContainer/MoviesContainer';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import moviePosters from '../data/movie_posters';

// Example imports (for later):
// import { useState, useEffect } from 'react';

// import movieDetails from '../data/movie_details';


function App() {
  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movies={moviePosters}></MoviesContainer> 
      </header>
    </main>
  );
}

export default App;
