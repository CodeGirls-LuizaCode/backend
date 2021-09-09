const express = require('express')

const produtosRouter = require('./produtos')
const usuarioRouter = require('./usuario')
const listaRouter = require('./lista')
const lojasRouter = require('./lojas')
const categoriasRouter = require('./categoria')

const router = express.Router()

router.use('/produtos', produtosRouter)
router.use('/usuarios', usuarioRouter)
router.use('/listas', listaRouter)
router.use('/lojas', lojasRouter)
router.use('/categorias', categoriasRouter)

module.exports = router