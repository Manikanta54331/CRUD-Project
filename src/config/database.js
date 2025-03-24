const { Sequelize } = require("sequelize");
const config = require('./index.js');
const logger = require("../helpers/loggers.js");

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    port: config.PORT,
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => logger.info("Database connected successfully"))
  .catch((err) => logger.error({ code: 404, message: "Database connection failed", data: err?.message }));

module.exports = sequelize;
