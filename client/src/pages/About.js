import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Card';
import Container from '@mui/material/Container';

const About = () => {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xlg">

                <h1 id='about' className='intro'>About</h1>

                <Paper elevation={12} sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: '1rem',
                        p: '1rem'
                        },
                    }}>
                    <p>
                        Created as a team project, elect.io aims to provide election information based on a user's location. The inspiration for this project was the lack of resources pertaining to upcoming elections, especially geared towards young people.
                    </p>
                    <p>
                        Powered by the Civic Information API, <a href='https://developers.google.com/civic-information'>Learn More</a>
                    </p>
                </Paper>

            </Container>
        </React.Fragment>

    )
}

export default About;