const { lista, usuario } = require("../models")

class ListaService {
  constructor (ListaModel) {
    this.lista = ListaModel
  }

  async listarCompras() {
    const lista = await this.lista.findAll({
      // include: [ //Retorna todos os atributos dos itens relacionados por ID
      //   usuario,
      //   produtos,
      //   lojas
      // ]
    });
    return lista
  }

  async adicionar(listaCompra) {
    const lista = await this.lista.findOne({
      where: [
        { ProdutoId: listaCompra.ProdutoId },
        { UsuarioId: listaCompra.UsuarioId }
      ]
    })
    if(lista) { //SE LISTA EXISTE = TRUE, SENÃO É FALSE E PULA A VALIDAÇÃO
      throw new Error('Este produto já existe na sua lista de compras.')
    }

    

    try {
      await this.lista.create(listaCompra)
    } catch(erro) {
      console.log(erro.message)
      throw erro
    }
  }

}
  
module.exports = ListaService