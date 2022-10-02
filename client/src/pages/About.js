import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

const About = () => {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">

                <h1 id='about' className='intro'>About</h1>

                <Card sx={{ minWidth: 275 }}>
                    Created as a team project, elect.io aims to provide election information based on a user's location. The inspiration for this project was the lack of resources pertaining to upcoming elections, especially geared towards young people.
                </Card>

            </Container>
        </React.Fragment>

    )
}

export default About;