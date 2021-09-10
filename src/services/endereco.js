class EnderecosService {
    constructor (EnderecoModel) {
      this.endereco = EnderecoModel
    }
  
    async listar () {
      const endereco = await this.endereco.findAll()
      return endereco
    }  
  }
    
  module.exports = EnderecosService