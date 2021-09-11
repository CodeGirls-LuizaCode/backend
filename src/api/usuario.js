const express = require('express');
const { body, check, validationResult } = require('express-validator');
const router = express.Router();
const { usuario } = require('../models');
const UsuarioService = require('../services/usuario');

const usuarioService = new UsuarioService(usuario);

router.get('/', async (req, res) => {
  /*
    #swagger.tags = ['Usuarios']
    #swagger.description = 'Endpoint para obter listagem de todos usuarios.'

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Usuario"},
      description: 'Usuarios encontrados',

    }

  */
  const usuario = await usuarioService.listar();
  res.status(200).json(usuario);
})


router.post('/', 
  check('cpf')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .matches('[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}')
    .withMessage('CPF Inválido'),
  async (req, res) => {
    /*
      #swagger.tags = ['Usuarios']
      #swagger.description = 'Endpoint para criar um novo usuario'
      #swagger.parameters['novoUsuario'] = {
        in: 'body',
        description: 'Cria novo usuário',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/novoUsuario'}
      }
      #swager.responses[201] = {
        description: 'Usuario criado com sucesso'
      }
      #swagger.responses[400] = {
        description: 'Nome, email, cpf, data_nascimento, e senha são obrigatórios'
      }
    */

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    const dadosUsuario = req.body;
    
    try {
      await usuarioService.cadastrar(dadosUsuario);
      res.status(201).send('Usuário cadastrado com sucesso!');
    } catch(erro) {
      res.status(400).send(erro.message);
    }

  })


router.put('/:id', 
    /*
      #swagger.tags = ['Usuarios']
      #swagger.description = 'Endpoint para atualizar cadastro de um usuario'
      #swagger.parameters['atualizarUsuario] = {
        in: 'body',
        description: 'Atualiza cadastro usuario',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/atualizarUsuario'}
      }
      #swager.responses[201] = {
        description: 'cadastro atualizado com sucesso'
      }
      #swagger.responses[401] = {
        description: 'Não foi possivel atualizar esse cadastro'
      }
    */
 

  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    const dadosUsuario = req.body;
    try {
      await usuarioService.alterar(req.params.id, dadosUsuario);
      res.status(202).send('Usuário atualizado com sucesso!');
    } catch(erro) {
      res.status(400).send(erro.message);
    }

  })


router.delete('/:id', async (req, res) => {
  /*
    #swagger.tags = ['Usuarios']
    #swagger.description = 'Endpoint para deletar um usuário.'

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Usuario"},
      description: 'deleta cadastro de usuário'
    }

    #swagger.responses[201] = {
      description: 'Não foi possivel deletar esse usuário'
    }

    #swagger.responses[401] = {
      description: 'Desculpe, tivemos um problema ao deletar esse usuário'
    }

  */
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    try {
      await usuarioService.deletar(req.params.id);
      res.status(200).send('Usuário deletado com sucesso!');
    } catch(erro) {
      res.status(400).send(erro.message);
    }

  })


module.exports = router