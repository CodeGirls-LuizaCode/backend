const jwt = require('jsonwebtoken')
const JWTSecret = 'codegirlscodegirlscodegirls'


const auth = (req, res, next) =>{
    const authToken = req.headers['authorization']
    const bearer = authToken.split(' ')
    const token = bearer[1]
    if(token != undefined) {
        jwt.sign(token,JWTSecret,(err, data) => {
            if(err){
                res.status(401).json('Token inválido')
            } else {
                req.token = token
                next()
            }
        })
    } else {
        res.status(401).json('Token Inválido')
    }
    
}

module.exports = auth