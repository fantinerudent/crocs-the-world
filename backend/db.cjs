require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  port: process.env.DB_PORT, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;