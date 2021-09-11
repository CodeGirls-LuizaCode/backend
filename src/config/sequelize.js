const Sequelize = require('sequelize');
const configDatabase = require('./database')


var pg = require('pg');
pg.defaults.ssl = true;


const sequelize = new Sequelize(configDatabase)
// const sequelize = new Sequelize('ec2-54-147-126-173.compute-1.amazonaws.com', {
//   dialect: 'postgres'
// })

module.exports = sequelize