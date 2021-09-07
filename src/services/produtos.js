
class ProdutoService {
    constructor(ProdutoModel) {
      this.produto = ProdutoModel
    }
  
    async get() {
      const produtos = await this.produto.findAll()
      return produtos;
    }

    async findByID(produtoId) {
      const produto = await this.produto.findOne({
        where: [{ id: produtoId }]
      });
      return produto;
    }    
  
}
  
module.exports = ProdutoService;