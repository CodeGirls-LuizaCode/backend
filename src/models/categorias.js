const categorias = (sequelize, DataTypes) => {
    const Categorias = sequelize.define('Categorias', {
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'categorias'
    })
    return Categorias;
}

module.exports = categorias;