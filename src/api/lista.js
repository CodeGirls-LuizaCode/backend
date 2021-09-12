const express = require('express');
const router = express.Router();
const { lista } = require('../models');
const ListaService = require('../services/lista');
const { body, check, validationResult } = require('express-validator');

const listaService = new ListaService(lista);

router.get('/', async (req, res) => {
  /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para obter listagem de todas as compras.'

    #swagger.responses[200] = {
      description: 'Listas Encontradas',

    }

  */
  const listas = await listaService.listarCompras();
  res.status(200).json(listas);
})

router.get('/compras/:usuarioId', async (req, res) => {
    /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para obter todas as compras finalizadas do usuário.'

    #swagger.responses[200] = {
      description: 'Compras realizadas',

    }

  */
  const listas = await listaService.listarComprasFinalizadasDoUsuario(req.params.usuarioId);
  res.status(200).json(listas);
})

router.get('/carrinho/:usuarioId', async (req, res) => {
      /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para obter os produtos adicionados no carrinho do usuário (compras não finalizadas)'

    #swagger.responses[200] = {
      description: 'Produtos encontrados no carrinho do usuário',

    }

  */
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
      /*
      #swagger.tags = ['Listas']
      #swagger.description = 'Endpoint para adicionar produto lista de compras'
      #swagger.parameters['AdicionarProdutoLista] = {
        in: 'body',
        description: 'Adiciona um produto na lista de compras',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/AdicionarProdutoLista'}
      }
      #swager.responses[200] = {
        description: 'Produto adicionado na lista com sucesso'
      }
      #swagger.responses[400] = {
        description: 'Não foi possivel adicionar esse produto na lista'
      }
    */
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    try {
      await listaService.adicionarProdutosNaLista(req.body);
      res.status(200).send('Produto adicionado a lista');
    } catch(erro) {
      res.status(400).send(erro.message);
    }
  }
)

router.delete('/:listaId', 
    /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para deletar um produto da lista de compras'

    #swagger.responses[200] = {
      description: 'Produto deletado da lista com sucesso',

    }

    #swagger.responses[400] = {
      description: 'Não foi possivel deletar o produto da lista'
    }

  */
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
    /*
      #swagger.tags = ['Listas']
      #swagger.description = 'Endpoint para finalizar lista de compras'

      #swager.responses[200] = {
        description: 'Compra finalizada com sucesso'
      }
      #swagger.responses[400] = {
        description: 'Não foi possivel finalizar a compra'
      }
    */
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