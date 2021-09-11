const express = require('express')
const routers = require('./api')
const { sequelize } = require('./models')

const app = express('./swagger_output.json')

app.use(express.json())
app.use('/', routers)


//Config Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
// http://localhost:3000/docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))



// { force: true }
sequelize.sync().then(() => {
    console.log('Conectado com o banco com sucesso!')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Conectado')
})

