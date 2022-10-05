import React from "react";
import { Container } from "@mui/material";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

// API
import { RepList } from "../components/RepList";
import { VoterInfo } from "../components/VoterInfo";

const Home = () => {
    return (

        // start of home "container"
        <Container className="center" maxWidth="xlg">
            <h1 className="intro">Home</h1>

            

                    <h4>Enter Address:</h4>

                    {/* textfield component is loaded with label and such */}

                    <TextField className='userInput' id="outlined-basic" label="Address" variant="outlined" />

                    <h5>Powered by the Civic Information API, <a href='https://developers.google.com/civic-information'>Learn More</a></h5>

        
                <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 'auto',
                        p: '3rem'
                        },
                    }}
                >
                    <Paper elevation={6}>
                        <RepList></RepList>
                    </Paper>

                    {/* <Paper elevation={6}>
                        <VoterInfo></VoterInfo>
                    </Paper> */}

                </Box>

        </Container>
    )
}

export default Home;