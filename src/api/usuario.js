const express = require('express');
const { body, check, validationResult } = require('express-validator');
const router = express.Router();
const { usuario } = require('../models');
const UsuarioService = require('../services/usuario');
const jwt = require('jsonwebtoken');
const auth = require('./autenticacao');
const jwtSecret = 'codegirlscodegirlscodegirls'


const usuarioService = new UsuarioService(usuario);

router.get('/', async (req, res) => {
  /*
    #swagger.tags = ['Usuarios']
    #swagger.description = 'Endpoint para obter listagem de todos usuarios.'

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Usuario"},
      description: 'Usuarios encontrados',

    }

    #swagger.responses[400] = {
      description: 'Token inválido'
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
        schema: { $ref: '#/definitions/NovoUsuario'}
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

router.post('/login', auth,
  check('email')
    .not().isEmpty()
    .withMessage('Campo email é obrigatório!'),
  async (req, res) => {
    /*
    #swagger.tags = ['Usuarios']
    #swagger.description = 'Endpoint para o login do usuário, disponibilizando o token de acesso aos recursos de pedido.'

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Usuario"},
      description: 'Login efetuado com sucesso',

    }

    #swagger.responses[400] = {
      description: 'Houve algum erro na requisição'
    }
    #swagger.responses[401] = {
      description: 'Unauthorized'
    }
    #swagger.responses[404] = {
      description: 'Usuário não cadastrado'
    }

  */

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, senha } = req.body
    const user = await usuario.findOne({
        where: {
          email: email
        }
      })

    if(user != undefined) {
        if(user.senha == senha) {
            jwt.sign({id: user.id, email: user.email}, jwtSecret, {expiresIn: '48h'},(err, token) => {
                if(err){
                    res.status(400).json('Falha interna!')
                }else {
                    res.status(200).json({token: token})
                }
            })
        } else {
            res.status(401).send('Credenciais inválidas!')
        }
    } else {
        res.status(404).send('Email não cadastrado')
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
        schema: { $ref: '#/definitions/AtualizarUsuario'}
      }
      #swager.responses[202] = {
        description: 'Usuário atualizado com sucesso'
      }
      #swagger.responses[400] = {
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
      description: 'Usuário deletado com sucesso'
    }

    #swagger.responses[400] = {
      description: 'Não foi possivel deletar esse usuário'
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