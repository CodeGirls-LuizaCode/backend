
class ProdutoService {
    constructor(ProdutoModel) {
      this.produto = ProdutoModel
    }
  
    async get() {
      const produtos = await this.produto.findAll()
      return produtos;
    }

    async procuraProdutoId(produtoId) { //procura no BD o produto com o ID recebido na requisição
      const produto = await this.produto.findByPk(produtoId); //método findByPk busca o produto pelo ID (Pk = Primary Key)
      return produto;
    }

    async diminuiEstoque(produtoId, quantidade) {
      const produto = await this.produto.findByPk(produtoId); //método findByPk busca o produto pelo ID (Pk = Primary Key)
      
      if (produto.estoque === 0) {
        throw new Error('Produto sem estoque disponível')
      }
      
      if ((produto.estoque - quantidade) < 0) { //VER!!!!!!!
        throw new Error(`Produto possui apenas ${produto.estoque} unidades em estoque.`)
      }
      
      produto.estoque = produto.estoque - quantidade;
      
      const salvo = await produto.save(); //método save percebe as alterações em produto e salva no BD

      if(!salvo) {
        throw new Error('Erro ao tentar diminuir o estoque.')
      }
    }
  
}
  
module.exports = ProdutoService;