import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function Movies({movies}) {

  const movieCards = movies.map( movie => {
    return (
      <MoviePoster
      id={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      votes={movie.vote_count}
      />
    
    )
  })



  return (
      <section className='MoviesContainer'>
       {movieCards}
      </section>
  );
}
  
export default Movies;