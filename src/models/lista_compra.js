const lista = ( sequelize, DataTypes) => {
    const Lista = sequelize.define('Lista', {
        id_usuario: {
            model: 'usuario',
            key: 'id'
        },
        id_produto: {
            model: 'produtos',
            key: 'id'
        },
        id_lojas: {
            model: 'lojas',
            key: 'id'
        },
        numero_pedido: {
            type: DataTypes.INTEGER,
        },
        quantidade: {
            type: DataTypes.INTEGER,
        },
        data_pedido: {
            type: DataTypes.STRING,
        },
        data_entrega: {
            type: DataTypes.DATETIME,
        },
        data_finalizacao: {
            type: DataTypes.DATETIME,
        },

    }, {
        tableName: 'lista'
    })
    return Lista
}

module.exports = lista;