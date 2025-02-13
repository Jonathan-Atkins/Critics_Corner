import './MoviePoster.css';

function MoviePoster({poster, id, votes, downVote, upVote}) {
  
  return (
    <section className='MoviePosters'>
      <img className="Poster" src={poster} alt="Poster Goes Here"></img>
      <p>{votes}</p>
      <button onClick={() => downVote(id)}>👎</button>
      <button onClick={() => upVote(id)}>👍</button>
    </section>
  );
}

export default MoviePoster;