import React from "react";
import { useMutation } from '@apollo/client';
import { Container } from "@mui/material";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';

// utils
import { ADD_ADDRESS } from '../utils/mutations';

// API
import { RepList } from "../components/RepList";


const Home = () => {

    const [addAddress, { error }] = useMutation(ADD_ADDRESS);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addAddress({
                variables: {address: document.getElementById('address').value}
            })
        } catch (e) {
            console.log(e)
        }
    }

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