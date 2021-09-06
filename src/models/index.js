const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Usuario = require('./usuario');
const Produtos = require('./produtos');
const Lista = require('./lista');
const Categorias = require('./categorias');
const Lojas = require('./lojas');
const Endereco = require('./endereco');


const usuario = Usuario(sequelize, Sequelize.DataTypes);
const produtos = Produtos(sequelize, Sequelize.DataTypes);
const lista = Lista(sequelize, Sequelize.DataTypes);
const categorias = Categorias(sequelize, Sequelize.DataTypes);
const endereco = Endereco(sequelize, Sequelize.DataTypes);
const lojas = Lojas(sequelize, Sequelize.DataTypes);

//Verificar!!!
produtos.belongsTo(categorias);
lista.belongsTo(produtos);
endereco.hasMany(usuario);
lojas.hasMany(lista);
lista.belongsTo(usuario);


const db = {
    usuario,
    produtos,
    lista,
    categorias,
    endereco,
    lojas,
    sequelize
};

module.exports = db;