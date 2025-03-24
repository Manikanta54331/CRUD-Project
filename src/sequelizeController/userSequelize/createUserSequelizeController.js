const logger = require("../../helpers/loggers");
const { User } = require("../../models");
const { sequelizeErrorValidation } = require("../../helpers/helper");

const createUserSequelizeController = async (data) => {
    try {
        const userData = await User.create(data);
        logger.info(`Add User Started`);
        
        if (!userData) {
            logger.error('User data creation failed');
            return {
                code: 404,
                message: "USER CREATION FAILED", 
                data: null
            };
        }
        logger.info('User data created');
        return {
            code: 200,
            message: "Successfully created user data", 
            data: userData
        }
    } catch (error) {
        logger.error('User data creation failed');
        const errorData = sequelizeErrorValidation(error);
        return errorData;
    }
}


module.exports = {
    createUserSequelizeController
}