const { param, validationResult } = require('express-validator');
const logger = require('../../helpers/loggers');

const getUserByIdValidation = [
    param('id')
        .notEmpty().withMessage('Id is required')
        .isNumeric().withMessage('Id must be a number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        logger.error("Validation error: ID is required and must be a number", { errors: errors.array() });
        return res.status(400).json({
            code: 400,
            message: 'Validation error: ID is required and must be a number',
            data: errors.array(),
        });
    }
];

module.exports = {
    getUserByIdValidation
};