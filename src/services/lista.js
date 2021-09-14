const { lista, produtos } = require("../models");
const ProdutoService = require('../services/produtos');
const Op = require('sequelize').Op;

const produtoService = new ProdutoService(produtos);

class ListaService {
  constructor (ListaModel) {
    this.lista = ListaModel;
    this.produtoService = produtoService;
  }

  async listarCompras() {
    const lista = await this.lista.findAll({
      include: [{all: true}]
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
  
  async listarComprasFinalizadasDoUsuario(usuarioId) {
    const lista = await this.lista.findAll({
      include: [{all: true}],
      where: [
        { UsuarioId: usuarioId },
        { data_finalizacao: {[Op.not]: null}}
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

    if(lista) {
      throw new Error('Este produto já existe na sua lista de compras.');
    }

    const jaExiste = await this.possuiProdutoComMesmoNome(listaCompra);

    if(jaExiste) {
      throw new Error('Mesmo tipo de produto já adicionado ao carrinho.');
    }
    
    try {
      listaCompra.quantidade = 1;
      await this.lista.create(listaCompra)
    } catch(erro) {
      throw erro;
    }
  }

  async possuiProdutoComMesmoNome(listaCompra) {
    
    const produto = await this.produtoService.procuraProdutoId(listaCompra.ProdutoId)
    if(!produto) {
      throw new Error('Produto não existe!');
    }

    const lista = await this.listarComprasNaoFinalizadasDoUsuario(listaCompra.UsuarioId);
    if(lista.length === 0) {
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

    if(!lista) {
      throw new Error('Este ID de pedido não existe!');
    }

    if(lista.data_finalizacao) {
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
      include: [{all:true}],
      where: [
        { UsuarioId: body.UsuarioId },
        { data_finalizacao: null }
      ]
    });

    if(lista.length === 0) {
      throw new Error('O usuário não possui produtos na lista!');
    }

    const numeroDoPedido = await this.numeroDePedidoRandomico(10000, 999999);
    let valorTotal = 0;

    for(let i = 0; i < lista.length; i++) {  
      
      await this.produtoService.diminuiEstoque(lista[i].ProdutoId, lista[i].quantidade);
    
      lista[i].data_finalizacao = new Date();
      lista[i].numero_pedido = numeroDoPedido;
      
      if(body.LojaId) {
        lista[i].LojaId = body.LojaId; 
      }

      valorTotal += parseFloat(lista[i].Produto.valor)

      await lista[i].save();
    }

    const response = {
      "numero_pedido": numeroDoPedido,
      "total_pedido": valorTotal,
      "message": "Lista finalizada com sucesso"
    }
    
    return response;
  }

  async retirarPedido(numeroPedido) {
    const lista = await this.lista.findAll({
      where: [
        { numero_pedido: numeroPedido }
      ]
    });
  
    if(lista.length === 0) {
      throw new Error('Este número de pedido não existe!');
    }
  
    if(lista[0].data_entrega) {
      throw new Error('Este pedido já foi entregue!');
    }
  
    for(let i = 0; i < lista.length; i++) {  
      lista[i].data_entrega = new Date();
      await lista[i].save();
    }

    return lista[0].LojaId ? "Produto foi retirado na loja" : "Produto foi entregue no endereço do cliente";
  }
}

module.exports = ListaService;