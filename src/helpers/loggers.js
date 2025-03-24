const { createLogger, format, transports } = require('winston');
const path = require('path');
const errorLog = path.join(__dirname, '../log/error.log');
const infoLog = path.join(__dirname, '../log/info.log');
const debug = path.join(__dirname, '../log/debug.log');
const logger = createLogger({
  level: 'info', 
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.File({ filename: errorLog, level: 'error' }),
    new transports.File({ filename: infoLog, level: 'info' }),
  ]
});

module.exports = logger;
