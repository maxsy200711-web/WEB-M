const dbConfig = require("../config/db.config");
const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;