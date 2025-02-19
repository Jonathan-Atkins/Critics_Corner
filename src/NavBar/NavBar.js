import './NavBar.css';
import Home from '../icons/home.png';

function NavBar({setDetails, details}) {
  return (
    <nav className='NavBar'>
      <h1>Rancid Tomatillos</h1>
      {details ? <button onClick={() => setDetails(null)}><img src={Home} alt='HOME'></img></button> : null}
    </nav>
  );
}



export default NavBar;