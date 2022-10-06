import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// components
// import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Paper from '@mui/material/Paper';


// pages
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav></Nav>
          <Hero></Hero>
          <Paper elevation={0} sx={{
                        background: '#eefcff',
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: '1rem',
                        p: '1rem'
                        },
                    }}>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>

        
          <Footer></Footer>
          </Paper>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
