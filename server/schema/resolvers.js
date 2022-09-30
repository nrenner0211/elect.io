const {User} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const { findByIdAndUpdate } = require('../models/User');

const resolvers = {
    Query: {

        users: async () => {
            return User.find()
                .select('-__v -password')
        },

        me: async(parent, args, context) => {
            if(context.user){
                const userData = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async(parent, args) => {

            console.log(args)
            
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },

        login: async(parent, {email, password}) => {
            const user = await User.findOne({email});
            console.log(user)
            if(!user){
                throw new AuthenticationError('Incorrect credentials!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Inccorect credentials!');
            }

            const token = signToken(user);
            return {token, user};
        }
    }
}

module.exports = resolvers;