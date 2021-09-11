const express = require('express');
const router = express.Router();
const { produtos } = require('../models');
const ProdutoService = require('../services/produtos');

const produtoService = new ProdutoService(produtos);

router.get('/', async (req, res) => {

  /*
    #swagger.tags = ['Produtos']
    #swagger.description = 'Endpoint para obter listagem de todos os produtos.'

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Produtos"},
      description: 'Produtos encontrados',

    }

  */
  const produtos = await produtoService.get();
  res.status(200).json(produtos);
})

router.get('/:produtoId', async (req, res) => { //retorna o produto especificado no ID
      /*
      #swagger.tags = ['Produtos']
      #swagger.description = 'Endpoint para retornar um produto por ID'
      
      #swager.responses[200] = {
        description: 'Usuario criado com sucesso'
      }

    */
  const produtos = await produtoService.procuraProdutoId(req.params.produtoId);
  res.status(200).json(produtos);
  
})

module.exports = router;