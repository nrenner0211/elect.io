const {User} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const { findByIdAndUpdate } = require('../models/User');

const resolvers = {
    //Query's for the monog DB for returning all users and a single user
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

    //Mutations for the monog DB for creating new users, JWT's, and adding an address to a signed in users profile
    Mutation: {
        addUser: async(parent, args) => {
            
            const user = await User.create(args);
            const token = signToken(user);
            console.log(token);

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
        },
         
        addAddress: async(parent, {address}, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$set: {address: address}},
                    { new: true }
                ).populate('address')

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;