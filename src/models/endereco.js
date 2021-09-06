const endereco = ( sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        logradouro: {
            type: DataTypes.STRING,
        },
        numero: {
            type: DataTypes.RANGE(DataTypes.INTEGER),
        },
        complemento: {
            type: DataTypes.STRING,
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

    }, {
        tableName: 'endereco'
    })
    return Endereco
}

module.exports = endereco;