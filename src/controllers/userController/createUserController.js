const logger = require("../../helpers/loggers.js");
const { response } = require("../../helpers/response");
const { createUserSequelizeController } = require("../../sequelizeController/userSequelize/createUserSequelizeController.js");

const createUserController = async (req, res) => {
  try {

    const userData = await createUserSequelizeController(req.body);
    console.log(userData);
    
    logger.info(`User created successfully,  ${userData.code} ${userData.message}`);
    return response({
      req, 
      res, 
      
      code:userData.code, 
      message: userData.message, 
      data: userData.data
    })

  } catch (error) {   
    logger.error("User creation failed", { error: error.stack }); 
    return response({
      req, 
      res, 
      code:444, 
      message: "Failed to create user: " + error?.message, 
      data: []
    })
  }
}

module.exports = { createUserController };
