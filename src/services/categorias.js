class CategoriaService {
    constructor (CategoriaModel) {
      this.categorias = CategoriaModel
    }
  
    async listar () {
      const categorias = await this.categorias.findAll()
      return categorias
    }  
  }
    
  module.exports = CategoriaService