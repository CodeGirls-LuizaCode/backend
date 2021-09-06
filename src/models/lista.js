const { usuario } = require(".");

const lista = ( sequelize, DataTypes) => {
    const Lista = sequelize.define('Lista', {
        numero_pedido: {
            type: DataTypes.NUMERIC,
        },
        quantidade: {
            type: DataTypes.NUMERIC,
        },
        data_entrega: {
            type: DataTypes.DATE,
        },
        data_finalizacao: {
            type: DataTypes.DATE,
        },

    }, {
        tableName: 'lista'
    })
    return Lista
}

module.exports = lista;