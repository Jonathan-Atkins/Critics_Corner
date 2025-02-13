import './MoviePoster.css';
import { useState } from 'react';

function MoviePoster({poster, id, votes}) {

  const [scores, setScores] = useState(votes)

  function downVote(scores){
    return scores -1
  };
  
  return (
    <section className='MoviePosters'>
      <img className="Poster" src={poster} alt="Poster Goes Here"></img>
      <p>{votes}</p>
      <button onClick = {event => downVote(event)}>👎</button>
    </section>
  );
}

export default MoviePoster;