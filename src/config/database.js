require('dotenv').config()
module.exports = {
  dialect:'postgres',
  host: process.env.HOST_DB,
  port: 5432,
  database: process.env.DATA_BASE,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
  }
}



