import React from "react";
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';

const Home = () => {
    return (

        // start of home "container"
        <Container maxWidth="sm">
            <h1 id='home' className="intro">Home</h1>

            <Card sx={{ minWidth: 275 }}>

                <CardContent>
                    <p>Enter Address</p>
                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                </CardContent>
                
            </Card>

            <Card sx={{ minWidth: 275 }}>

                <CardContent>
                    <ul>
                        <li id="result"></li>
                    </ul>
                </CardContent>
                
                {/* link to civic info api */}
                <CardActions>
                    <Button variant="contained" href="https://developers.google.com/civic-information">
                        Learn More
                    </Button>
                </CardActions>
                
            </Card>

        </Container>
    )
}

export default Home;