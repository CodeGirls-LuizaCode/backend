const Sequelize = require('sequelize');
const configDatabase = require('./database')

const sequelize = new Sequelize('postgres://bifijodsoepfhq:d3fa3b287a9d006c4e17289852f5c1e46352079c444ed510332a61e9a0e6dbe8@ec2-54-147-126-173.compute-1.amazonaws.com:5432/dev5e6hj3j13vu')

module.exports = sequelize