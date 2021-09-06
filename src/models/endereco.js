const endereco = ( sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.NUMERIC,
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING,
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        tableName: 'endereco'
    })
    return Endereco
}

module.exports = endereco;