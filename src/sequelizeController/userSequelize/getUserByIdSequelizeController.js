const { sequelizeErrorValidation } = require("../../helpers/helper");
const logger = require("../../helpers/loggers");
const { User } = require("../../models");

const getUserByIdSequelizeController = async ({ id }) => {
    try {
        const userData = await User.findByPk(id);
        logger.info("User Data Fetching Started");
        if (!userData) {
            logger.error("User Data is not created");
            return {
                code: 404,
                message: "USER NOT FOUND", 
                data: {}
            }
        }
        logger.info("User Data Fetched Completed");
        return {
            code: 200,
            message: "Successfully fetched user data", 
            data: userData
        }
    } catch (error) {
        logger.error("Error Occured in User Data Fetching");
        const errorData = sequelizeErrorValidation(error);
        return errorData;
    }
}


module.exports = {
    getUserByIdSequelizeController
}