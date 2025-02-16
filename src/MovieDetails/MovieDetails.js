import './MovieDetails.css';

function MovieDetails({ details }) {
  if (!details) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="MovieDetails">
      <h2>{details.title}</h2>
      <img src={details.backdrop_path} alt="Movie Poster"></img>
      <p>{details.overview}</p>
    </section>
  );
}

export default MovieDetails;