import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img
            className="navbar__logo-image"
            src={require('../../assets/logo/Moodvie.png')}
            alt="Moodvie logo"
          />
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/register" className="navbar__link">Register</Link>
        <Link to="/login" className="navbar__link">Login</Link>
        <Link to="/selectedmovies" className="navbar__link navbar__link--highlight">Movie Pool</Link>
        <Link to="/movies" className="navbar__link">Movies</Link>
      </div>
    </nav>
  );
}