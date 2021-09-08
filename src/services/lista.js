const { lista, produtos } = require("../models");
const ProdutoService = require('../services/produtos');

const produtoService = new ProdutoService(produtos);

class ListaService {
  constructor (ListaModel) {
    this.lista = ListaModel;
    this.produtoService = produtoService;
  }

  async listarCompras() { //lista todas as compras do usuário
    const lista = await this.lista.findAll({
      include: [{all: true}] //inclui todos os dados das tabelas associadas (Usa os relacionamentos pra isso)
    });
    return lista;
  }
  
  async listarComprasNaoFinalizadasDoUsuario(usuarioId) { 

    const lista = await this.lista.findAll({
      include: [{all: true}],
      where: [
        { UsuarioId: usuarioId },
        { data_finalizacao: null }
      ]
    });

    return lista;
  }
  
  async adicionarProdutosNaLista(listaCompra) {
    const lista = await this.lista.findOne({
      where: [
        { ProdutoId: listaCompra.ProdutoId },
        { UsuarioId: listaCompra.UsuarioId },
        { data_finalizacao: null }
      ]
    });

    if(lista) { //SE LISTA EXISTE = TRUE, SENÃO É FALSE E PULA A VALIDAÇÃO
      throw new Error('Este produto já existe na sua lista de compras.');
    }

    const jaExiste = await this.possuiProdutoComMesmoNome(listaCompra);
    console.log(jaExiste);

    if (jaExiste) {
      throw new Error('ERRO: Mesmo tipo de produto já adicionado ao carrinho.');
    }
    
    try {
      await this.lista.create(listaCompra) //adiciona o produto na lista de compra
    } catch(erro) {
      console.log(erro.message);
      throw erro;
    }
  }

  async possuiProdutoComMesmoNome(listaCompra) {
    
    // Procura o produto q o cliente está comprando em todos os produtos do BD
    const produto = await this.produtoService.procuraProdutoId(listaCompra.ProdutoId)
    if(!produto) {
      throw new Error('Produto não existe!');
    }

    // Traz a Lista dos pedidos do cliente que não esteja finalizada
    const lista = await this.listarComprasNaoFinalizadasDoUsuario(listaCompra.UsuarioId);
    if(lista.length === 0) { //lista vazia, não possui produto com o mesmo nome
      return false;
    }
 
    for(let i = 0; i < lista.length; i++) {
      if(produto.produto === lista[i].Produto.produto) {
        return true;
      }
    }
    return false;
  }

  async deletaProdutoDaLista(listaId) {
    const lista = await this.lista.findOne({
      where: [
        { id: listaId }
      ]
    });

    if(!lista) {//se não tem valor armazenado(lista = false), entra no if
      throw new Error('Este ID de pedido não existe!');
    }

    if(lista.data_finalizacao) {//se tem valor armazenado(lista = true), entra no if
      throw new Error('Não é possível excluir produtos de uma compra finalizada!');
    }

    return lista.destroy();
  }

}
  
module.exports = ListaService;