class LojaService {
  constructor (LojaModel) {
    this.loja = LojaModel
  }

  async listar () {
    const lojas = await this.loja.findAll()
    return lojas
  }  
}
  
module.exports = LojaService