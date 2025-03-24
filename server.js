const config = require('./src/config/index.js');
const app = require("./src/app");
const logger = require('./src/helpers/loggers.js');
// const { syncDatabase } = require("./src/models");

const PORT = config.WEB_PORT || '';

app.listen(PORT, async () => {
  // await syncDatabase();
  logger.info(`Server running on http://localhost:${PORT}`);
});
