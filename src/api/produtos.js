const express = require('express')
const router = express.Router()
const { produtos } = require('../models')
const ProdutoService = require('../services/produtos')

const produtoService = new ProdutoService(produtos)

router.get('/', async (req, res) => {
  /*
    #swagger.tags = [Produtos]
    #swagger.description = 'Endpoint para obter listagem de todos produto.'

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/produtos"},
      description: 'Produtos encontrados',

    }

    #swagger.responses[404] = {
      description: 'Produtos não encontrados'
    }

    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }

  */
  const produtos = await produtoService.get()
  res.status(200).json(produtos)
})

module.exports = router