const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const {typeDefs, resolvers} = require('./schema');
const {authMiddleware} = require('./utils/auth');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({typeDefs, resolvers, context: authMiddleware})
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//start the back end apollo server

const startApolloServer = async (typeDefs, resolvers) => {
  //await server bootup
  await server.start();
  server.applyMiddleware({app});

  if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  //deliver the home page as link base route
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  })

  //confirm server is open
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
  });
}

startApolloServer(typeDefs, resolvers);