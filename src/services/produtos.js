
class ProdutoService {
    constructor(ProdutoModel) {
      this.produto = ProdutoModel
    }
  
    async get() {
      const produtos = await this.produto.findAll()
      return produtos;
    }

    async procuraProdutoId(produtoId) {
      const produto = await this.produto.findByPk(produtoId);
      return produto;
    }

    async diminuiEstoque(produtoId, quantidade) {
      const produto = await this.produto.findByPk(produtoId);
      
      if (produto.estoque === 0) {
        throw new Error('Produto sem estoque disponível')
      }
      
      if ((produto.estoque - quantidade) < 0) {
        throw new Error(`Produto possui apenas ${produto.estoque} unidades em estoque.`)
      }
      
      produto.estoque = produto.estoque - quantidade;
      
      const salvo = await produto.save();

      if(!salvo) {
        throw new Error('Erro ao tentar diminuir o estoque.')
      }
    }
}
  
module.exports = ProdutoService;