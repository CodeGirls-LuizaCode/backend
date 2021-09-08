const { lista, produtos } = require("../models")
const ProdutoService = require('../services/produtos')

const produtoService = new ProdutoService(produtos);

class ListaService {
  constructor (ListaModel) {
    this.lista = ListaModel;
    this.produtoService = produtoService;
  }

  async listarCompras() { //lista todas as compras do usuário
    const lista = await this.lista.findAll({
      include: [{all: true}] //inclui todos os dados das tabelas associadas (Usa os relacionamentos pra isso)
    })
    return lista;
  }
  
  async listarComprasNaoFinalizadasDoUsuario(usuarioId) { 

    const lista = await this.lista.findAll({
      include: [{all: true}],
      where: [
        { UsuarioId: usuarioId },
        { data_finalizacao: null }
      ]
    })

    return lista;
  }
  
  async adicionarProdutosNaLista(listaCompra) {
    const lista = await this.lista.findOne({
      where: [
        { ProdutoId: listaCompra.ProdutoId },
        { UsuarioId: listaCompra.UsuarioId },
        { data_finalizacao: null }
      ]
    })

    if(lista) { //SE LISTA EXISTE = TRUE, SENÃO É FALSE E PULA A VALIDAÇÃO
      throw new Error('Este produto já existe na sua lista de compras.')
    }

    const jaExiste = await this.possuiProdutoComMesmoNome(listaCompra);
    console.log(jaExiste);

    if (jaExiste) {
      throw new Error('ERRO: Mesmo tipo de produto já adicionado ao carrinho.')
    }
    
    try {
      await this.lista.create(listaCompra) //adiciona o produto na lista de compra
    } catch(erro) {
      console.log(erro.message)
      throw erro
    }
  }

  async possuiProdutoComMesmoNome(listaCompra) {
    
    // Procura o produto q o cliente está comprando em todos os produtos do BD
    const produto = await this.produtoService.procuraProdutoId(listaCompra.ProdutoId)
    if(!produto) {
      throw new Error('Produto não existe!')
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

  //copia de teste da função de cima
  async testeChecaPorNomeeUsuario(usuarioId, nomeProduto) {
    
    // Procura o produto do cliente
    const produtoAchado = await produtoModel.findAll({ where: {produto: nomeProduto}});
    console.log(produtoAchado);

    // Traz a Lista dos pedidos do cliente que não esteja finalizada
    const lista = await this.listarComprasNaoFinalizadasDoUsuario(usuarioId);
    console.log(lista);

    //Controles para o While
    let possuiNomeIgual = false;
    i = 0;

    while (possuiNomeIgual === false) {
      if(produto.produto === lista[i].Produto.produto) {
        possuiNomeIgual = true;
      }
      i++;
    }

    if (possuiNomeIgual) {
      return true;
    }

    return false;
  }

}
  
module.exports = ListaService