const lojas = ( sequelize, DataTypes) => {
    const Lojas = sequelize.define('Lojas', {
        nome: {
            type: DataTypes.STRING,
        },
        logradouro: {
            type: DataTypes.STRING,
        },
        numero: {
            type: DataTypes.RANGE(DataTypes.INTEGER),
        },
        bairro: {
            type: DataTypes.STRING,
        },
        cidade: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING(2),
        },
        cep: {
            type: DataTypes.STRING,
        },
        telefone: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'lojas'
    })
    return Lojas
}

module.exports = lojas;