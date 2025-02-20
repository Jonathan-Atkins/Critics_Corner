import './NavBar.css';
import Home from '../icons/home.png';
import { NavLink } from 'react-router-dom';

function NavBar({setDetails, details}) {
  return (
    <nav className='NavBar'>
      <h1>Rancid Tomatillos</h1>
      <NavLink to = '/' className="nav"><img className= "Home" src={ Home } alt='Home Button'/></NavLink>
    </nav>
  );
}



export default NavBar;