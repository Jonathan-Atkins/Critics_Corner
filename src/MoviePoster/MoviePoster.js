import './MoviePoster.css';
import { useState } from 'react';

function MoviePoster({poster, id, votes, downVote, upVote, findDetails}) {
  
  return (
    <section className='MoviePosters'>
      <img className="Poster" onClick={() => findDetails(id)} src={poster} alt="Poster Goes Here"></img>
      <p>{votes}</p>
      <section className='voteButtons'> 
      <button onClick={() => downVote(id)}>👎</button>
      <button onClick={() => upVote(id)}>👍</button>
      </section>
    </section>
  );
}

export default MoviePoster;