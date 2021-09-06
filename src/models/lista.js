const { usuario } = require(".");

const lista = ( sequelize, DataTypes) => {
    const Lista = sequelize.define('Lista', {
        // id_usuario: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: { 
        //         model: 'usuario',
        //         key: 'id'
        //     }
        // },
        
        // id_produto: {
        //     type: DataTypes.INTEGER,
        //     references: { 
        //         model: 'produtos',
        //         key: 'id'
        //     }
        // },
        // id_lojas: {
        //     model: 'lojas',
        //     key: 'id'
        // },
        numero_pedido: {
            type: DataTypes.RANGE(DataTypes.INTEGER),
        },
        quantidade: {
            type: DataTypes.RANGE(DataTypes.INTEGER),
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