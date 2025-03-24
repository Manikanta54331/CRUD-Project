// const getUserById = async (id) => await User.findByPk(id);

const { sequelizeErrorValidation } = require("../../helpers/helper");
const logger = require("../../helpers/loggers");
const { User } = require("../../models");

const updateUserSquelizeController = async (id,data) => {
    try {
        const userData = await User.findByPk(id);
        logger.info("User Data Updated Started");
        if (!userData) {
            logger.error("User Data Not Found");
            return {
                code: 404,
                message: "USER NOT FOUND", 
                data: {}
            }
        }
        const [updatedRows] = await User.update(data, {
            where: { id } 
        });
        const updatedUser = await User.findByPk(id);
        logger.info("User Data Updated");
        return {
            code: 200,
            message: "Successfully fetched user data", 
            data: updatedUser
        }
    } catch (error) {
        logger.error("Error Occured in User Data Updating");
        const errorData = sequelizeErrorValidation(error);
        return errorData;
    }
}


module.exports = {
    updateUserSquelizeController
}