const { body, validationResult } = require('express-validator');
const logger = require('../../helpers/loggers');

const allowedFields = ['name', 'email', 'age'];

const createUserValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    body('age')
        .notEmpty().withMessage('Age is required')
        .isNumeric().withMessage('Age must be a number')
        .isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        const inputKeys = Object.keys(req.body);
        
        const extraFields = inputKeys.filter(key => !allowedFields.includes(key));
        if (extraFields.length > 0) {
            logger.warn(`Extra fields detected: ${extraFields}`);
            return res.status(422).json({
                code: 404,
                message: `Extra fields detected: ${extraFields.join(', ')}`,
                data: []
            });
        }

        if (!errors.isEmpty()) {
            logger.error("Validation error", { errors: errors.array() });
            return res.status(400).json({
                code: 400,
                message: 'Validation error',
                data: errors.array()
            });
        }

        return next();
    }
];

module.exports = {
    createUserValidation,
};
