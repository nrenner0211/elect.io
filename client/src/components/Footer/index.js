import React from 'react';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// components


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Footer () {

    return(

        <section>
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
            </section>
        </section>

    )
}

export default Footer;