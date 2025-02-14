import './MoviePoster.css';

function MoviePoster({poster, id, votes, downVote, upVote}) {
  
  return (
    <section className='MoviePosters'>
      <img className="Poster" src={poster} alt="Poster Goes Here"></img>
      <p>{votes}</p>
      <section className='voteButtons'> 
      <button onClick={() => downVote(id)}>👎</button>
      <button onClick={() => upVote(id)}>👍</button>
      </section>
    </section>
  );
}

export default MoviePoster;