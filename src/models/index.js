const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Usuario = require('./usuario');
const Produtos = require('./produtos');
const Lista = require('./lista_compra');
const Categorias = require('./categorias');
const Lojas = require('./lojas');
const Endereco = require('./endereco');


const usuario = Usuario(sequelize, Sequelize.DataTypes);
const produtos = Produtos(sequelize, Sequelize.DataTypes);
const lista = Lista(sequelize, Sequelize.DataTypes);
const categorias = Categorias(sequelize, Sequelize.DataTypes);
const endereco = Endereco(sequelize, Sequelize.DataTypes);
const lojas = Lojas(sequelize, Sequelize.DataTypes);

produtos.belongsTo(categorias);
lista.hasMany(produtos);
endereco.belongToMany(usuario);
lojas.belongToMany(lista);
lista.hasOne(usuario);

const db = {
    usuario,
    produtos,
    lista,
    categorias,
    endereco,
    lojas,
};

module.exports = db;