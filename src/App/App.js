import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import moviePosters from '../data/movie_posters';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(moviePosters);

  const downVote = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, vote_count: Math.max(movie.vote_count - 1, 0) };
      } 
      return movie; 
    });
    setMovies(updatedMovies);
  };

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <MoviesContainer movies={movies} downVote={downVote} />
    </main>
  );
}

export default App;