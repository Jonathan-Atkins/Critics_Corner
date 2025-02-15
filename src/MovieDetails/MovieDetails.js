import './MovieDetails.css';

function MovieDetails({ details }) {
  if (!details) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="MovieDetails">
      <h2>{details.title}</h2>
      <p>{details.overview}</p>
    </section>
  );
}

export default MovieDetails;