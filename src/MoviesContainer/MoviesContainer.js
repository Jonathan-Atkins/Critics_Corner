import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function Movies({movies, downVote, upVote}) {
  if (!movies) {
    return <h2>Loading...</h2>
}
  const movieCards = movies.map( movie => {
    return (
      <MoviePoster
      id={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      votes={movie.vote_count}
      downVote={downVote}
      upVote={upVote}
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