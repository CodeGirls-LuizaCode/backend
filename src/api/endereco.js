const express = require('express');
const router = express.Router();
const { endereco } = require('../models');
const EnderecosService = require('../services/endereco');

const enderecoService = new EnderecosService(endereco);

router.get('/', async (req, res) => {
  const endereco = await enderecoService.listar()
  res.status(200).json(endereco)
})

module.exports = router