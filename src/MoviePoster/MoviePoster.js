import './MoviePoster.css';

function MoviePoster({poster, votes}) {
  return (
    <section className='MoviePosters'>
      <img className="Poster" src={poster} alt="Poster Goes Here"></img>
      <p>{votes}</p>
    </section>
  );
}

export default MoviePoster;