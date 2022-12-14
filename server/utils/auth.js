const jwt = require('jsonwebtoken');

const secret='secret';
const expiration = '2h';

//authentication middleware for creating JWT's and verifying them
module.exports = {
    signToken: function({username, email, _id, address}){
        const payload = {username, email, _id, address};

        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    },

    authMiddleware: function({req}) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization){
            token = token.split(' ').pop().trim();
        }

        if(!token){
            return req;
        }

        try{
            const {data} = jwt.verify(token, secret, {maxAge: expiration});
            req.user = data;
        }catch{
            console.log('Invalid token');
        }

        return req;
    }
}