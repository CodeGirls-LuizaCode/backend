
class ProdutoService {
    constructor(ProdutoModel) {
      this.produto = ProdutoModel
    }
  
    async get() {
      const produtos = await this.produto.findAll()
      return produtos;
    }

    async procuraProdutoId(produtoId) { //procura no BD o produto com o ID recebido na requisição
      const produto = await this.produto.findOne({ where: { id: produtoId } });
      return produto;
    }
  
}
  
module.exports = ProdutoService;