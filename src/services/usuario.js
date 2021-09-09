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
      throw new Error('Já existe um usuário cadastrado com esse CPF!')
    }
    try {
      await this.usuario.create(dadosUsuario)
    } catch (erro){
      console.log(erro.message)
      throw erro
    }
  }

  //ATENÇÃO - ALTERADO - colocar na documentação que o cpf não pode ser alterado
  async alterar(id, dadosUsuario) {
    if(dadosUsuario.cpf) { //elimina o cpf, caso seja enviado no body da atualização
      delete dadosUsuario.cpf;
    }
    console.log(dadosUsuario);

    return await this.usuario.update(dadosUsuario, { where: { id: id } })
  }

  async deletar(id) {
    return await this.usuario.destroy({ where: { id: id } })
  }
  
}
module.exports = UsuarioService