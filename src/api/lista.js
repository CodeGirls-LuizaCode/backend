const express = require('express');
const router = express.Router();
const { lista } = require('../models');
const ListaService = require('../services/lista');
const { body, check, validationResult } = require('express-validator');

const listaService = new ListaService(lista);

router.get('/', async (req, res) => {
  const listas = await listaService.listarCompras();
  res.status(200).json(listas);
})

router.get('/compras/:usuarioId', async (req, res) => {
  const listas = await listaService.listarComprasFinalizadasDoUsuario(req.params.usuarioId);
  res.status(200).json(listas);
})

router.get('/carrinho/:usuarioId/', async (req, res) => {
  const listas = await listaService.listarComprasNaoFinalizadasDoUsuario(req.params.usuarioId);
  res.status(200).json(listas);
})

router.post('/', [
  check('ProdutoId')
    .not().isEmpty().matches(/\d/)
    .withMessage('ProdutoID Inválido'),

  check('UsuarioId')
    .not().isEmpty().matches(/\d/)
    .withMessage('UsuarioID Inválido'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    try {
      await listaService.adicionarProdutosNaLista(req.body);
      res.status(201).send('Produto adicionado a lista');
    } catch(erro) {
      res.status(400).send(erro.message);
    }
  }
)

router.delete('/:listaId', 
  async (req, res) => {
    try {
      await listaService.deletaProdutoDaLista(req.params.listaId);
      res.status(200).send('Produto removido da lista de compras!');
    } catch(erro) {
      res.status(400).send(erro.message);
    }
  }
)

router.post('/finalizar-lista', 
  check('UsuarioId')
    .not().isEmpty().matches(/\d/)
    .withMessage('UsuarioID Inválido'),
  async (req, res) => {
    try {
      const pedido = await listaService.finalizaLista(req.body); //Pega o usuárioID do body da requisição
      res.status(200).json(pedido); //retorna o json com numero do pedido e mensagem de sucesso.
    } catch(erro) {
      res.status(400).send(erro.message);
    }
  }
)

module.exports = router