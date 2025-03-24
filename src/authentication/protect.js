const jwt = require('jsonwebtoken');
const {response} = require('../helpers/response');
const {User} = require('../models/index');
const dotenv = require('dotenv');
dotenv.config();
const protect = (req, res, next) => {
    try{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }
            if (!token) {
            return response({
                req,
                res,
                code: 401,
                message: 'Authorization token is missing or invalid',
                data: {},
            });
        }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);
            const user = User.findOne({where: {id: decoded.id}});
            if (!user) {
                return response({
                    req,
                    res,
                    code: 401,
                    message: 'User not found',
                    data: {},
                });
            }
            next();
    } catch (err) {
        console.log(err);
        return response({
            req,
            res,
            code: 401,
            message: 'Authorization token is missing or invalid',
            data: {},
        });
    }
};

module.exports = {protect};
