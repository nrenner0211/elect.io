import React from "react";
import { Container } from "@mui/material";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import { Link } from "react-router-dom";
import Paper from '@mui/material/Card';
import TextField from '@mui/material/TextField';

// API
import { RepList } from "../components/RepList";
import { VoterInfo } from "../components/VoterInfo";

const Home = () => {
    return (

        // start of home "container"
        <Container className="center" maxWidth="xlg">
            <h1 id='home' className="intro">Home</h1>

            <Paper variant="outlined" elevation={12}>

                    <p>Enter Address:</p>

                    {/* textfield component is loaded with label and such */}

                    <TextField className='userInput' id="outlined-basic" label="Address" variant="outlined" />

        
                <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: '2rem',
                        p: '5rem'
                        },
                    }}
                >
                    <Card>
                        <RepList></RepList>
                    </Card>

                    <Card>
                        <VoterInfo></VoterInfo>
                    </Card>
                </Box>
            </Paper>
        </Container>
    )
}

export default Home;