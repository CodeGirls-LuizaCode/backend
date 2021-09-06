const lojas = ( sequelize, DataTypes) => {
    const Lojas = sequelize.define('Lojas', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'lojas'
    })
    return Lojas
}

module.exports = lojas;