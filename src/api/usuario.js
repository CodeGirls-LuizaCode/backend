const express = require('express')
const { body, check, validationResult } = require('express-validator')
const router = express.Router()
const { usuario } = require('../models')
const UsuarioService = require('../services/usuario')

const usuarioService = new UsuarioService(usuario)

router.get('/', async (req, res) => {
    /*
    #swagger.tags = [Usuario]
    #swagger.description = 'Endpoint para obter listagem de todos usuarios.'

<<<<<<< HEAD
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/usuario"},
      description: 'Usuarios encontrados',

    }

    #swagger.responses[404] = {
      description: 'usuario não encontrado'
    }

    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }

  */
  const usuario = await usuarioService.listar()
  res.status(200).json(usuario)
})


=======
>>>>>>> islene
router.post('/', 
  body('cpf').not().isEmpty().trim().escape(),
  check('cpf')
    .not().isEmpty()
    .matches('[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}')
    .withMessage('Cpf Invalido'),
  async (req, res) => {
    /*
      #swagger.tags = ['Usuario']
      #swagger.description = 'Endpoint para criar um usuario'
      #swagger.parameters['novoUsuario] = {
        in: 'body',
        description: 'Informações do usuario',
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

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    const dadosUsuario = req.body
    console.log(dadosUsuario)
    try {
      await usuarioService.cadastrar(dadosUsuario)
      res.status(201).send('usuario cadastrado com sucesso!')
    } catch(erro){
      res.status(400).send(erro.message)
    }

  },

)


router.put('/:id', 
  body('cpf').not().isEmpty().trim().escape(),
  check('cpf')
    .not().isEmpty()
    .matches('[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}')
    .withMessage('Cpf Invalido'),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    const dadosUsuario = req.body
    try {
      await usuarioService.alterar(req.params.id, dadosUsuario)
      res.status(201).send('usuario Atualizado com sucesso!')
    } catch(erro){
      res.status(401).send(erro.message)
    }

  },
)



router.delete('/:id', async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    try {
      await usuarioService.deletar(req.params.id)
      res.status(201).send('usuario deletado com sucesso!')
    } catch(erro){
      res.status(401).send(erro.message)
    }

  },
)

module.exports = router