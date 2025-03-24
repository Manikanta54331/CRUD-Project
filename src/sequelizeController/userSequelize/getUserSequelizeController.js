// const getUserById = async (id) => await User.findByPk(id);

const { sequelizeErrorValidation } = require("../../helpers/helper");
const logger = require("../../helpers/loggers");
const { User } = require("../../models");

const getUserSequelizeController = async () => {
    try {
        const userData = await User.findAll();
        logger.info("User Data Fetching Started");
        if (!userData) {
            logger.error("USer Data Not Found");
            return {
                code: 404,
                message: "USER NOT FOUND", 
                data: {}
            }
        }
        logger.info("User Data Fetched");
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
    getUserSequelizeController
}