module.exports = {
    dialect: 'postgres',
    host: process.env.PORT,
    port: 5432,
    database: process.env.DATA_BASE,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB //não esquecer de alterar a senha
}