const express = require('express')
const router = express.Router()
const { produtos } = require('../models')
const ProdutoService = require('../services/produtos')

const produtoService = new ProdutoService(produtos)

router.get('/', (req, res) => {
  const produtos = produtoService.get()
  res.status(200).json(produtos)
})

module.exports = router