const { lista, produtos } = require("../models");
const ProdutoService = require('../services/produtos');
const Op = require('sequelize').Op; //importado para uso do operador NÃO NULO

const produtoService = new ProdutoService(produtos);

class ListaService {
  constructor (ListaModel) {
    this.lista = ListaModel;
    this.produtoService = produtoService;
  }

  async listarCompras() { //lista todas as compras do usuário
    const lista = await this.lista.findAll({
      include: [{all: true}] //inclui todos os dados das tabelas associadas (Usa os relacionamentos de tabelas pra isso)
    });

    return lista;
  }
  
  async listarComprasNaoFinalizadasDoUsuario(usuarioId) { //lista apenas as compras não finalizadas do usuário, carrinho de compras
    const lista = await this.lista.findAll({
      include: [{all: true}], //inclui todos os dados das tabelas associadas (Usa os relacionamentos de tabelas pra isso)
      where: [
        { UsuarioId: usuarioId },
        { data_finalizacao: null }
      ]
    });

    return lista;
  }
  
  async listarComprasFinalizadasDoUsuario(usuarioId) { //lista apenas as compras finalizadas do usuário
    const lista = await this.lista.findAll({
      include: [{all: true}],
      where: [
        { UsuarioId: usuarioId },
        { data_finalizacao: {[Op.not]: null}} //importado método Op do sequelize, no topo, para retornar tudo que NÃO é nulo
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

    if(lista) { //se lista = true, o produto já existe no carrinho
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
    
    // Produto existe? Procura o produto q o cliente está comprando em todos os produtos do BD
    const produto = await this.produtoService.procuraProdutoId(listaCompra.ProdutoId)
    if(!produto) {
      throw new Error('Produto não existe!');
    }

    // Traz a Lista dos pedidos do cliente que não esteja finalizada
    const lista = await this.listarComprasNaoFinalizadasDoUsuario(listaCompra.UsuarioId);
    if(lista.length === 0) { //se a lista está vazia, não possui produto com o mesmo nome
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

  async numeroDePedidoRandomico(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async finalizaLista(body) {
    const lista = await this.lista.findAll({
      where: [
        { UsuarioId: body.UsuarioId },
        { data_finalizacao: null }
      ]
    });

    if(lista.length === 0) {
      throw new Error('O usuário não possui produtos na lista!');
    }

    const numeroDoPedido = await this.numeroDePedidoRandomico(10000, 999999); //gera um n. de pedido randomico min e max

    try {
      for(let i = 0; i < lista.length; i++) {  
        
        await this.produtoService.diminuiEstoque(lista[i].ProdutoId, lista[i].quantidade);
      
        lista[i].data_finalizacao = new Date(); //todos os produtos da lista do usuário recebem a data atual
        lista[i].numero_pedido = numeroDoPedido; //todos os produtos da lista do usuário recebem o n. do pedido
        
        if(body.LojaId) {
          lista[i].LojaId = body.LojaId; 
        }

        await lista[i].save(); //método save percebe as alterações na lista e salva no BD
      }
    } catch (erro){
      throw erro;
    }

    const response = {
      "numero_pedido": numeroDoPedido,
      "message": "Lista finalizada com sucesso"
    }
    
    return response;
    
  }
}
  
module.exports = ListaService;