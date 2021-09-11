module.exports = {
    dialect: 'postgres',
    host: 'ec2-54-147-126-173.compute-1.amazonaws.com',
    port: 5432,
    database: process.env.DATABASE_URL,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,//não esquecer de alterar a senha
    // dialectOptions: {
    //     ssl: {
    //       require: true, // This will help you. But you will see nwe error
    //       rejectUnauthorized: false // This line will fix new error
    //     }
    // }
}


