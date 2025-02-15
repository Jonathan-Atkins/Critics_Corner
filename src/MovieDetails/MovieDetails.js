import './MovieDetails.css';

function MovieDetails(details) {
  return (
    <section className='MovieDetails'>
      <p>{details.backdrop_path}</p>
      <p>{details.genre_ids}</p>
      <p>{details.overview}</p>
    </section>
  );
}

export default MovieDetails;