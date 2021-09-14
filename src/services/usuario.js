const Op = require('sequelize').Op;

class UsuarioService {
  constructor (UsuarioModel) {
    this.usuario = UsuarioModel
  }

  async listar () {
    const usuario = await this.usuario.findAll({
      include: [{all: true}]
    });
    return usuario
  }

  async cadastrar(dadosUsuario){
    const usuario = await this.usuario.findOne({
      where: {
        [Op.or]: [
          { cpf: dadosUsuario.cpf },
          { email: dadosUsuario.email }
        ]
      }
    })
    if (usuario){
      if (usuario.email == dadosUsuario.email) {
        throw new Error('Já existe um usuário cadastrado com esse email!')
      }
      throw new Error('Já existe um usuário cadastrado com esse CPF!')
    }
    try {
      await this.usuario.create(dadosUsuario)
    } catch (erro){
      throw erro
    }

  }
  
  async alterar(id, dadosUsuario) {
    if(dadosUsuario.cpf) {
      delete dadosUsuario.cpf;
    }

    return await this.usuario.update(dadosUsuario, { where: { id: id } })
  }

  async deletar(id) {
    return await this.usuario.destroy({ where: { id: id } })
  }
}

module.exports = UsuarioService