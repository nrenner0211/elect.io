import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Container } from "@mui/material";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';

// utils
import { EDIT_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Dashboard = () => {

    const [formState, setFormState] = useState({ username: '',  email: '', password: '', address: '' });
    const edit = useMutation(EDIT_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            
          const mutationResponse = await edit({
            variables: { username: formState.username, email: formState.email, password: formState.password, address: formState.address },
          });
          const token = mutationResponse.data.edit.token;
          Auth.login(token);
          
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleChange = (event) => {
        const { user, value } = event.target;
        setFormState({
          ...formState,
          [user]: value,
        });
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

                                {/* <label htmlFor="username"></label>
                                <input type="text" id="username" placeholder="Username" name="username"
                                onChange={handleChange}></input>

                                <label htmlFor="email"></label>
                                <input type="text" id="email" placeholder="Email" name="email"
                                onChange={handleChange}></input>

                                <label htmlFor="password"></label>
                                <input type="text" id="password" placeholder="Password" name="password"
                                onChange={handleChange}></input> */}

                                <label htmlFor="address"></label>
                                <input type="text" id="address" placeholder="Address" name="address"
                                onChange={handleChange}></input>

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