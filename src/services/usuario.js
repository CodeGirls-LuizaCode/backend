const { usuario } = require("../models")

class UsuarioService {
  constructor (UsuarioModel) {
    this.usuario = UsuarioModel
  }

  async listar () {
    const usuario = await this.usuario.findAll()
    return usuario
  }

  async cadastrar(dadosUsuario){
    const usuario = await this.usuario.findOne({
      where: {
        cpf: dadosUsuario.cpf
      }
    })
    if (usuario != null){
      throw new Error('Já existe um CPF cadastrado com esse nome!')
    }
    try {
      await this.usuario.create(dadosUsuario)
    } catch (erro){
      console.log(erro.message)
      throw erro
    }
  }

  async deletar(id) {
    return await this.usuario.destroy({ where: { id: id } })
  }
  
}
  
module.exports = UsuarioService