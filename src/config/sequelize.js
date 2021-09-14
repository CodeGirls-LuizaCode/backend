const Sequelize = require('sequelize');
const configDatabase = require('./database')

var pg = require('pg');
pg.defaults.ssl = true;

const sequelize = new Sequelize(configDatabase)

module.exports = sequelize