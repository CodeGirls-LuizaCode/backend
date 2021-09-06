const usuario = ( sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        cpf: {
            type: DataTypes.STRING,
        },
        data_nascimento: {
            type: DataTypes.DATE,
        },
        senha: {
            type: DataTypes.STRING,
        },
        // id_endereco: {
        //     model: 'endereco',
        //     key: 'id'
        // }
    }, {
        tableName: 'usuario'
    })
    return Usuario
}

module.exports = usuario;