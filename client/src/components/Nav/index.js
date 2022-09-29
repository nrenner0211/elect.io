import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../../assets/cover/ballot-favicon.ico';

function Nav() {

    return (
        <header>
            <nav className='navbar'>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to="/">
                            <span>
                                <img className='App-logo' alt='favicon' src={ favicon } style={{ width: "2.25rem" }}></img><h2 style={{ fontSize: "2.25rem", marginRight: "3rem" }}> elect.io
                                </h2>
                            </span>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link to='/About'>
                            About
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link to='/login'>
                            Log In
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link to='/Signup'>
                            Signup
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link to='/Contact'>
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