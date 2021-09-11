class UsuarioService {
  constructor (UsuarioModel) {
    this.usuario = UsuarioModel
  }

  async listar () {
    const usuario = await this.usuario.findAll({
      include: [{all: true}] //inclui todos os dados das tabelas associadas (Usa os relacionamentos de tabelas pra isso)
    });
    return usuario
  }

  async cadastrar(dadosUsuario){
    const usuario = await this.usuario.findOne({
      where: {
        cpf: dadosUsuario.cpf
      }
    })
    if (usuario != null){
      throw new Error('Já existe um usuário cadastrado com esse CPF!')
    }
    try {
      await this.usuario.create(dadosUsuario)
    } catch (erro){
      console.log(erro.message)
      throw erro
    }
  }
  
  async alterar(id, dadosUsuario) {
    if(dadosUsuario.cpf) { //elimina o cpf, caso seja enviado no body da atualização
      delete dadosUsuario.cpf;
    }

    return await this.usuario.update(dadosUsuario, { where: { id: id } })
  }

  async deletar(id) {
    return await this.usuario.destroy({ where: { id: id } })
  }
  
}
module.exports = UsuarioService