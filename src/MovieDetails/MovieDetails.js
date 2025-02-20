import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MovieDetails.css';
import NavBar from '../NavBar/NavBar';

function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  const API_URL = `https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`;

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log('Error fetching movie details:', error));
  }, []);

  if (!details) {
    return <h2>Loading...</h2>;
  }

  const backgroundImage = details.poster_path
    ? `url(${details.poster_path})`
    : 'url(/default-background.jpg)';

  return (
    <div className="MovieDetailsContainer" style={{ backgroundImage: backgroundImage }}>
      <NavBar />
      <section className="MovieDetails">
        <div className="BackgroundOverlay"></div>
        <div className="MovieInfo">
          <h2>{details.title}</h2>
          <img src={details.poster_path} alt="Movie Poster" />
          <p>{details.overview}</p>
        </div>
      </section>
    </div>
  );
}

export default MovieDetails;