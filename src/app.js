const express = require('express')
const routers = require('./api')
const { sequelize } = require('./models')

const app = express()

app.use(express.json())
app.use('/', routers)

// { force: true }
sequelize.sync().then(() => {
    console.log('Conectado com o banco com sucesso!')
})

app.listen(3000, () => {
    console.log('Servidor Conectado')
})