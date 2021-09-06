const express = require('express')

const produtosRouter = require('./produtos')
const usuarioRouter = require('./usuario')
const listaRouter = require('./lista')

const router = express.Router()

router.use('/produtos', produtosRouter)
router.use('/usuarios', usuarioRouter)
router.use('/listas', listaRouter)

module.exports = router