import Inferno from 'inferno';
import logo from './zahias-logo.svg';
import { Link } from 'inferno-router';

export default function Navbar() {
  return (
    <nav className='navbar is-primary'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href="/">
            <img src={logo} alt="zahias" width="112" height="52" />
          </a>
          <div className='navbar-burger'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <a href="" className='navbar-item'>About</a>
            <a href="" className='navbar-item'>Products</a>
            <a href="" className='navbar-item'>Contact Us</a>
            <Link to="/admin" className='navbar-item'>Admin </Link>
          </div>
          <div className='navbar-end'>
            <Link to="/login" className='navbar-item'>LOGIN</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}