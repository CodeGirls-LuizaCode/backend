const express = require('express');
const router = express.Router();
const { lojas } = require('../models');
const LojaService = require('../services/lojas');

const lojaService = new LojaService(lojas);

router.get('/', async (req, res) => {
    /*
    #swagger.tags = ['Lojas']
    #swagger.description = 'Endpoint para obter a listagem de todas as lojas'

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Lojas"},
      description: 'Lista endereço de todas as lojas fisicas',

    }

  */
  const lojas = await lojaService.listar()
  res.status(200).json(lojas)
})

module.exports = router