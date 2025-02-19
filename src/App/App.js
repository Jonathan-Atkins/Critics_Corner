import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { useState, useEffect } from 'react';

const API_URL = 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log("Movies:", data);
        setMovies(data || []); 
      })
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  const updateVote = (id, voteDirection) => {
    // console.log('Vote Direction:', voteDirection, 'ID:', id);
    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vote_direction: voteDirection })
    })
      .then((response) => response.json())
      .then((updatedMovie) => {
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie.id === id ? { ...movie, vote_count: updatedMovie.vote_count } : movie
          )
        );
      })
      .catch((error) => console.error('Error updating vote:', error));
  };

  const downVote = (id) => {
    const movie = movies.find((m) => m.id === id);
    if (movie) {
      updateVote(id, 'down'); 
    }
  };

  const upVote = (id) => {
    const movie = movies.find((m) => m.id === id);
    if (movie) {
      updateVote(id, 'up'); 
    }
  };

  function findDetails(id) {
    const selectedMovie = moviePosters.find(movie => movie.id === id);
    setDetails({
      ...movieDetails, title: selectedMovie.title 
    });
  }

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <MoviesContainer movies={movies} downVote={downVote} upVote={upVote} />
      <NavBar setDetails={setDetails} details={details}/>
      {!details ? (<MoviesContainer movies={movies} downVote={downVote} upVote={upVote} findDetails={findDetails}/> )
      : ( <MovieDetails details={details}/>)}
    </main>
  );
}

export default App;