import React from 'react';
import Contact from '../Contact';



function Footer () {
    return(
        <section>
            <div className='to-do'>
            <h1 id='footer' className='intro what-to-do'>What to do</h1>
            <ol className='li-width'>
                <li>Create your account to gain access to locations to vote.</li>
                <li>Search for your local voting location</li>
                <li>Go out and vote when its voting day!</li>
            </ol>       
            </div>  
            <div className='card'>
                <Contact></Contact>
            </div>

        </section>
    )
}

export default Footer;