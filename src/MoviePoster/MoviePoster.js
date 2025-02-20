import { NavLink } from 'react-router-dom';
import './MoviePoster.css';


function MoviePoster({poster, id, votes, downVote, upVote}) {

  return (
    <section className='MoviePosters'>
      <nav>
        <NavLink to= { `movies/${id}`} className="nav"> <img className="Poster" src={poster} alt="Poster Goes Here"></img></NavLink>
      </nav>
      <p>{votes}</p>
      <section className='voteButtons'> 
        <button className= "downVote" onClick={() => downVote(id)}>👎</button>
        <button className="upVote" onClick={() => upVote(id)}>👍</button>
      </section>
    </section>
  );
}

export default MoviePoster;