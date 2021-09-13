const jwt = require('jsonwebtoken')
const JWTSecret = 'codegirlscodegirlscodegirls'


const auth = (req, res, next) =>{
    const authToken = req.headers['authorization']
    const bearer = authToken.split(' ')
    console.log(bearer)
    const token = bearer[1]
    console.log(token)
    if(token != undefined) {
        jwt.sign(token,JWTSecret,(err, data) => {
            if(err){
                console.log(err)
                res.status(401).json('Token inválido')
            } else {
                req.token = token
                console.log(data)
                next()
            }
        })
    } else {
        res.status(401).json('Token Inválido')
    }
    
}

module.exports = auth