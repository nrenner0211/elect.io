import React from 'react';
import Contact from '../Contact';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Footer () {

    return(

        <section>
            <h1 id='footer' className='intro'>More</h1>
            <section className='flex-column center'>
                <div className='card'>
                    <div className='cardTitle'>

                    </div>
                </div>
            </section>
        </section>

    // <Container maxWidth="xlg">
    //   <Grid container spacing={2}>
    //     <Grid item xs={12}>

    //       <Item>
    //         <h1 id='footer' className='intro'>More</h1>
    //       </Item>

    //       <Item>
    //         <Contact></Contact>
    //       </Item>

    //     </Grid>
    //   </Grid>
    // </Container>

    )
}

export default Footer;