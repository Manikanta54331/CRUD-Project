const logger = require("../../helpers/loggers.js");
const { response } = require("../../helpers/response");
const { getUserByIdSequelizeController } = require("../../sequelizeController/userSequelize/getUserByIdSequelizeController.js");

const getUserByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await getUserByIdSequelizeController({id});
    logger.info(`user data fetched response: ${userData.code} ${userData.message}`)
    
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

module.exports = { getUserByIdController };
