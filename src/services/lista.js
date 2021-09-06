const { lista } = require("../models")

class ListaService {
  constructor (ListaModel) {
    this.lista = ListaModel
  }

  async listarCompras () {
    const lista = await this.lista.findAll()
    return lista
  }

  

  async adicionar(listaCompra){
    const lista = await this.lista.findOne({
      where: [
          { produto: listaCompra.produto },
          { usuario: listaCompra.usuarioid }
        ]
    })
    if (listaCompra.produto === this.lista.produto){
      throw new Error('Este produto já foi adicionado a sua lista')
    }
    try {
      await this.lista.create(listaCompra)
    } catch (erro){
      console.log(erro.message)
      throw erro
    }
  }
  
}
  
module.exports = ListaService