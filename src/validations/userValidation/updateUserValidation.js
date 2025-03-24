const {param, validationResult,body} = require('express-validator');
const logger = require('../../helpers/loggers');
const updateUserByIdValidation = [
    //body().isEmpty().withMessage('Request body must not be empty'),
    param('id')
        .notEmpty().withMessage('Id is required')
        .isNumeric().withMessage('Id must be a number'),
    body('name').optional().isString().withMessage('Name must be a string').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').optional().isEmail().withMessage('Invalid email format'),
    body('age').optional().isNumeric().withMessage('Age must be a number').isInt({ min: 0 }).withMessage('Age must be a positive integer').isLength({ min: 2 }).withMessage('Age must be at least 2 character long'),    
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
    updateUserByIdValidation
}