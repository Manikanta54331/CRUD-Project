const logger = require("../../helpers/loggers");
const { response } = require("../../helpers/response");

const { deleteUserSequelizeController } = require("../../sequelizeController/userSequelize/deleteUserSequelizeController");
const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await deleteUserSequelizeController(id);
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
      message: "Failed to delete user: " + error?.message, 
      data: []
    })
  }
}

module.exports = { deleteUserController };

