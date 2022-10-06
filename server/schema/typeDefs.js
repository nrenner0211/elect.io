const {gql} = require('apollo-server-express');

//declare type definitions for graphql calls to the server
const typeDefs = gql`

    type User{
        _id: ID
        username: String
        email: String
        address: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!):Auth
        addAddress(address: String!): User
    }
`;

module.exports = typeDefs;