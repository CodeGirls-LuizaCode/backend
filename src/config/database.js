// const process = require('dotenv/config');
// console.log(process.env.DATABASE_URL)

module.exports = {
    dialect: 'postgres',
    host: 'ec2-54-147-126-173.compute-1.amazonaws.com',
    port: 5432,
    database: 'dev5e6hj3j13vu',
    username: 'bifijodsoepfhq',
    password: 'd3fa3b287a9d006c4e17289852f5c1e46352079c444ed510332a61e9a0e6dbe8',//não esquecer de alterar a senha
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
    }
}



