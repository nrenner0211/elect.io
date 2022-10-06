import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Container } from "@mui/material";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';

// utils
import { ADD_ADDRESS } from '../utils/mutations';


const Dashboard = () => {

    const [addAddress, { error }] = useMutation(ADD_ADDRESS);


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            

          const mutationResponse = await addAddress({
            variables: {address: document.getElementById('address').value}
          });

          
        } catch (e) {
          console.log(e);

        }
      };

    return (

        // start of dashboard "container"
        <Container className="center" maxWidth="xlg">
            <h1 className="intro">Dashboard</h1>

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
                        <div className="subtitle"> Edit Information
                            <form className="edit-form" onSubmit={handleFormSubmit}>


                                <label htmlFor="address"></label>
                                <input type="text" id="address" placeholder="Address" name="address"
                                ></input>
                                

                                <label htmlFor="submitEditForm"></label>
                                <button id="submit">Submit</button>

                            </form>
                        </div>
                    </Paper>

                </Box>

        </Container>
    )
}

export default Dashboard;