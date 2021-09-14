const jwt = require('jsonwebtoken');
const JWTSecret = 'codegirlscodegirlscodegirls';

const auth = (req, res, next) =>{
    const authToken = req.headers['authorization']
    if (!authToken) {
        res.status(401).json('Insira um token');
    }
    const bearer = authToken.split(' ');
    const token = bearer[1];

    if(token) {
        jwt.sign(token,JWTSecret,(err, data) => {
            if(err) {
                res.status(401).json('Token inválido');
            }
            req.token = token;
            next();
        })
    }
}

module.exports = auth;