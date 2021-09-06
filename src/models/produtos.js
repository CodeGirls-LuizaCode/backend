const produtos = ( sequelize, DataTypes) => {
    const Produtos = sequelize.define('Produtos', {
        produto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        image_prod: {
            type: DataTypes.STRING,
        },

    }, {
        tableName: 'produtos'
    })
    return Produtos
}

module.exports = produtos;