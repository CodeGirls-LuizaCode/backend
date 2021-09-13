const express = require('express');
const router = express.Router();
const { lista } = require('../models');
const ListaService = require('../services/lista');
const { body, check, validationResult } = require('express-validator');
const auth = require('./autenticacao');

const listaService = new ListaService(lista);

router.get('/', auth, async (req, res) => {
  /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para obter listagem de todas as compras.'

    #swagger.security = [{
      "apiKeyAuth": []
    }]

    #swagger.responses[200] = {
      description: 'Listas Encontradas',

    }

    #swagger.responses[401] = {
      description: 'Unauthorized',

    }

  */
  try{
    const listas = await listaService.listarCompras();
    res.status(200).json(listas)
  } catch(erro) {
    res.status(401).send(erro.message);
  }

})

router.get('/compras/:usuarioId', auth,async (req, res) => {
    /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para obter todas as compras finalizadas do usuário.'

    #swagger.security = [{
      "apiKeyAuth": []
    }]

    #swagger.responses[200] = {
      description: 'Compras realizadas',

    }

    #swagger.responses[401] = {
      description: 'Unauthorized',

    }

  */
  try{
    const listas = await listaService.listarComprasFinalizadasDoUsuario(req.params.usuarioId);
    res.status(200).json(listas);
  } catch(erro){
    res.status(401).send(erro.message);
  }

})

router.get('/carrinho/:usuarioId', auth, async (req, res) => {
      /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para obter os produtos adicionados no carrinho do usuário (compras não finalizadas)'

    #swagger.security = [{
      "apiKeyAuth": []
    }]


    #swagger.responses[200] = {
      description: 'Produtos encontrados no carrinho do usuário',

    }
    #swagger.responses[401] = {
      description: 'Unauthorized'
    }

  */
 try{
  const listas = await listaService.listarComprasNaoFinalizadasDoUsuario(req.params.usuarioId);
    res.status(200).json(listas);
  } catch(erro){
    res.status(401).send(erro.message);
  }

})

router.post('/', auth, [
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

      #swagger.security = [{
        "apiKeyAuth": []
      }]
      #swager.responses[200] = {
        description: 'Produto adicionado na lista com sucesso'
      }
      #swagger.responses[400] = {
        description: 'Não foi possivel adicionar esse produto na lista'
      }
      #swagger.responses[401] = {
        description: 'Unauthorized'
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
      res.status(401).send(erro.message);
    }
  }
)

router.delete('/:listaId', auth, 
    /*
    #swagger.tags = ['Listas']
    #swagger.description = 'Endpoint para deletar uma lista de compras'

    #swagger.security = [{
      "apiKeyAuth": []
    }]

    #swagger.responses[200] = {
      description: 'lista deletada com sucesso',

    }

    #swagger.responses[401] = {
      description: 'Unauthorized'
    }

  */
  async (req, res) => {
    try {
      await listaService.deletaProdutoDaLista(req.params.listaId);
      res.status(200).send('Produto removido da lista de compras!');
    } catch(erro) {
      res.status(401).send(erro.message);
    }
  }
)

router.post('/finalizar-lista', auth, 
  check('UsuarioId')
    .not().isEmpty().matches(/\d/)
    .withMessage('UsuarioID Inválido'),
    /*
      #swagger.tags = ['Listas']
      #swagger.description = 'Endpoint para finalizar lista de compras'

      #swagger.security = [{
        "apiKeyAuth": []
      }]

      #swager.responses[200] = {
        description: 'Compra finalizada com sucesso'
      }
      #swagger.responses[401] = {
        description: 'Unauthorized'
      }
    */
  async (req, res) => {
    
    try {
      const pedido = await listaService.finalizaLista(req.body); //Pega o usuárioID do body da requisição
      res.status(200).json(pedido); //retorna o json com numero do pedido e mensagem de sucesso.
    } catch(erro) {
      res.status(401).send(erro.message);
    }
  }
)

router.post('/entrega', 
  check('numero_pedido')
    .not().isEmpty().matches(/\d/)
    .withMessage('Número do pedido inválido'),
    /*
      #swagger.tags = ['Listas']
      #swagger.description = 'Endpoint para registrar a retirada do pedido'

      #swager.responses[200] = {
        description: 'Produto retirado com sucesso'
      }
      #swagger.responses[400] = {
        description: 'Este pedido já foi entregue!'
      }
    */
  async (req, res) => {
    
    try {
      const retirada = await listaService.retirarPedido(req.body.numero_pedido); //Pega o numero do pedido do body da requisição
      res.status(200).json(retirada); //retorna o json com a mensagem de sucesso.
    } catch(erro) {
      res.status(400).send(erro.message);
    }
  }
)

module.exports = router;