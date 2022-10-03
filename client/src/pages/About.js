import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Card';
import Container from '@mui/material/Container';

const About = () => {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">

                <h1 id='about' className='intro'>About</h1>

                <Paper variant="outlined" elevation={6}>
                    Created as a team project, elect.io aims to provide election information based on a user's location. The inspiration for this project was the lack of resources pertaining to upcoming elections, especially geared towards young people.
                </Paper>

            </Container>
        </React.Fragment>

    )
}

export default About;