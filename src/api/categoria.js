const express = require('express');
const router = express.Router();
const { categorias } = require('../models');
const CategoriaService = require('../services/categorias');

const categoriaService = new CategoriaService(categorias);

router.get('/', async (req, res) => {
  const categorias = await categoriaService.listar()
  res.status(200).json(categorias)
})

module.exports = router