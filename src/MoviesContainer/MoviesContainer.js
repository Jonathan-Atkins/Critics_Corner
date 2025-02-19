import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function Movies({ movies, downVote, upVote, findDetails }) {
  if (!movies) {
    return <h2>Loading...</h2>;
  }

  const movieCards = movies.map(movie => {
    return (
      <MoviePoster
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        votes={movie.vote_count}
        downVote={downVote}
        upVote={upVote}
        findDetails={findDetails}
      />
    );
  });

  return <section className='MoviesContainer' data-cy="movies-container">{movieCards}</section>;
}

export default Movies;