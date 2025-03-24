// const getUserById = async (id) => await User.findByPk(id);

const { error } = require("winston");
const { sequelizeErrorValidation } = require("../../helpers/helper");
const logger = require("../../helpers/loggers");
const { User } = require("../../models");

const deleteUserSequelizeController = async (id) => {
    try {
        logger.info(`Delete User Started: ${userData.code} ${userData.message}`);
        const userData = await User.findByPk(id);
        if (!userData) {
            logger.error("User! not found");
            return {
                code: 404,
                message: "USER NOT FOUND", 
                data: {}
            }
        }
        const user = await User.destroy({
            where: { id: id }
            
        });
        logger.info("User Data Deleted");
        return {
            code: 200,
            message: "Successfully fetched user data", 
            data: user
        }
    } catch (error) {
        logger.error("Error Occured in User Database");
        const errorData = sequelizeErrorValidation(error);
        return errorData;
    }
}


module.exports = {
    deleteUserSequelizeController
}