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

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Conectado', this.address().port, app.settings.env)
})