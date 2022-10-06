import React from "react";
import { Container } from "@mui/material";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';

// API
import { RepList } from "../components/RepList";
// import { VoterInfo } from "../components/voterInfo";

const Home = () => {

    return (

        // start of home "container"
        <Container className="center" maxWidth="xlg">
            <h1 className="intro">Home</h1>
        
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


                </Box>

        </Container>
    )
}

export default Home;