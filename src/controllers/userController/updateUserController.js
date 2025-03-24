const logger = require("../../helpers/loggers.js");
const { response } = require("../../helpers/response");
const { updateUserSquelizeController } = require("../../sequelizeController/userSequelize/updateUserSequelizeController.js");


const updateUserController = async (req, res) => {
  try {

    const userData = await updateUserSquelizeController(req.params.id, req.body);
    logger.info(`user data updated: ${userData.code} ${userData.message}`)
    
    return response({
      req, 
      res, 
      
      code:userData.code, 
      message: userData.message, 
      data: userData.data
    })

  } catch (error) {  
    logger.error(`user data updation failed: ${error?.message}`) 
    return response({
      req, 
      res, 
      code:444, 
      message: "Failed to update user: " + error?.message, 
      data: []
    })
  }
  // const user = await userService.createUser(req.body);
  // res.json({
  //   code: 200,
  //   message: "User Created Successfully",
  //   data: user,
  // });
}

module.exports = { updateUserController };
