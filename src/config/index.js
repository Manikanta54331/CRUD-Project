require('dotenv').config(); 

const PORT = process.env.PORT || '';
const WEB_PORT = process.env.WEB_PORT || '';
const DB_HOST = process.env.DB_HOST || '';
const DB_USER = process.env.DB_USER || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || '';
const DB_DIALECT = process.env.DB_DIALECT || '';

module.exports = {
  PORT,
  WEB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_DIALECT,
};