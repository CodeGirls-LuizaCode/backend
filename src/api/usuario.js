const express = require('express')
const { body, check, validationResult } = require('express-validator')
const router = express.Router()
const { usuario } = require('../models')
const UsuarioService = require('../services/usuario')

const usuarioService = new UsuarioService(usuario)

router.get('/', async (req, res) => {
  const usuario = await usuarioService.listar()
  res.status(200).json(usuario)
})

router.post('/', 
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
    console.log(dadosUsuario)
    try {
      await usuarioService.cadastrar(dadosUsuario)
      res.status(201).send('usuario cadastrado com sucesso!')
    } catch(erro){
      res.status(400).send(erro.message)
    }
  }
),

router.delete("/:id", (req, res) => {
    const usuario = usuario.destroy({id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
        error: true,
        message: "Error: A pessoa usuária não foi apagada corretamente"
        });
        return res.json({
        error: false,
        message: "A pessoa usuária foi apagada corretamente"
        })
    })
})

module.exports = router