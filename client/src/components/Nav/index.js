import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../../assets/cover/favicon.ico';

function Nav() {

  return (
    <header>
        <h2>
            <Link to="/">
            <img className='favicon' alt='favicon' src={ favicon }></img> elect.io
            </Link>
        </h2>
        <nav className='navbar'>
            <ul className="flex-row">
            <li className="mx-2">
                <Link to='/'>
                    Home
                </Link>
            </li>
            {/* <li className='mx-2'>
                <Link to='/gallery'>
                    Gallery
                </Link>
            </li> */}
            <li className='mx-2'>
                <Link to='/contact'>
                    Contact
                </Link>
            </li>
            <li className='mx-2'>
                <a href="#footer">
                    More
                </a>
            </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;