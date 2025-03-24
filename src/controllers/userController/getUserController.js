const logger = require("../../helpers/loggers.js");
const { response } = require("../../helpers/response");
const { getUserSequelizeController } = require("../../sequelizeController/userSequelize/getUserSequelizeController.js");

const getUserController = async (req, res) => {
  try {

    const userData = await getUserSequelizeController();
    logger.info(`user data fetched response: ${userData.code} ${userData.message}`);
    
    return response({
      req, 
      res, 
      code:userData.code, 
      message: userData.message, 
      data: userData.data
    })

  } catch (error) {   
    logger.error(`user data fetched failed: ${error?.message}`) 
    return response({
      req, 
      res, 
      code:444, 
      message: "Failed to get user: " + error?.message, 
      data: []
    })
  }
}

module.exports = { getUserController };
