const produtos = ( sequelize, DataTypes) => {
    const Produtos = sequelize.define('Produtos', {
        id_categoria: {
            model: 'categorias',
            key: 'id'
        },
        produto: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.TEXT,
        },
        marca: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.DOUBLE,
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