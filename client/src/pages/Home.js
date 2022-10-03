import React from "react";
import { Container } from "@mui/material";
import Paper from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';

// API
import { RepList } from '../components/RepList';

const Home = () => {
    return (

        // start of home "container"
        <Container maxWidth="sm">
            <h1 id='home' className="intro">Home</h1>

            <Paper variant="outlined">

                <CardContent>
                    <p>View Representatives by Address</p>
                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                </CardContent>

                <CardContent>
                    <RepList></RepList>
                </CardContent>
                
                {/* link to civic info api */}
                <CardActions>
                    <Button variant="contained" href="https://developers.google.com/civic-information">
                        Learn More
                    </Button>
                </CardActions>
                
            </Paper>

        </Container>
    )
}

export default Home;