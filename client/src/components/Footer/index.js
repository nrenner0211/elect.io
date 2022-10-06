import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import nRenn from '../../assets/avatars/nikiavatar.jpg';


function Footer () {

    return(

        <Container className="center" maxWidth="xlg">
            <h1 id='footer' className='intro'>More</h1>
            <section className='center'>
                <ul className='flex-column'> 
                    <li>
                        <Link to="/signup">Go to Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Go to Login</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                </ul>


                <ul className='flex-row'> 
                    <li className="avatar">
                        <Avatar alt="Nicolette Renner" src={nRenn} sx={{ width: "6rem", height: "6rem" }} />
                        <a href="https://www.linkedin.com/in/nicolette-renner/">LinkedIn</a>
                    </li>
                    <li className="avatar">
                        <Avatar sx={{ width: "6rem", height: "6rem" }}>JH</Avatar>
                        <a href="https://github.com/Pickaxe9999">GitHub</a>
                    </li>
                    <li className="avatar">
                        <Avatar sx={{ width: "6rem", height: "6rem" }}>DW</Avatar>
                        <a href="https://github.com/Davon95">GitHub</a>
                    </li>
                </ul>

            </section>
        </Container>

    )
}

export default Footer;