const usuario = ( sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'usuario'
    })
    return Usuario
}

module.exports = usuario;