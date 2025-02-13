import './App.css';
// import searchIcon from '../icons/search.png';
import Movies from '../MoviesContainer/MoviesContainer';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import moviePosters from '../data/movie_posters';
import { useState } from 'react';


// Example imports (for later):


// import movieDetails from '../data/movie_details';


function App() {

  // const [movies, setMovies] = useState(movies)


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
