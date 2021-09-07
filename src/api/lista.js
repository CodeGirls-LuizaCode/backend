const express = require('express')
const router = express.Router()
const { lista } = require('../models')
const ListaService = require('../services/lista')
const { body, check, validationResult } = require('express-validator')

const listaService = new ListaService(lista)

router.get('/', async (req, res) => {
  const listas = await listaService.listarCompras()
  res.status(200).json(listas)
})


router.post('/', [
  body('ProdutoId').not().isEmpty().trim().escape().matches(/\d/),
  check('ProdutoId')
  .not().isEmpty().matches(/\d/)
  .withMessage('USUARIO ERRO NO CHECK'),

  body('UsuarioId').not().isEmpty().trim().escape().matches(/\d/),
  check('UsuarioId')
    .not().isEmpty().matches(/\d/)
    .withMessage('USUARIO ERRO NO CHECK'),
],
  async (req, res) => {
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({errors: errors.array()})
    // }
    const listaCompra = req.body
    console.log(listaCompra)
    try {
      await listaService.adicionar(listaCompra)
      res.status(201).send('Produto adicionado a lista')
    } catch(erro){
      res.status(400).send(erro.message)
    }

  }

),


module.exports = router