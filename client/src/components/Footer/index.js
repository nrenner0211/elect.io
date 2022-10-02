import React from 'react';
import Contact from '../Contact';



function Footer () {
    return(
        <section className='my-5'>
            <h1 id='footer' className='intro'>What to do</h1>          
            <div className='card'>
                <Contact></Contact>
            </div>

        </section>
    )
}

export default Footer;