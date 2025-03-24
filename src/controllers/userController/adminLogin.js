const jwt = require('jsonwebtoken');
const {response} = require('../../helpers/response');
const {User} = require('../../models/index');
const adminLogin = async (req, res) => {
    try{
        console.log(req.query);
        const id = req.query.id;
        console.log(id);
        const user = await User.findOne({where: {id:id}});
        
        if (!user) {
            return response({
                req,
                res,
                code: 401,
                message: 'User not found',
                data: {},
            });
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1week'});
        console.log(token);
        return res.status(200).header('Authorization', `Bearer ${token}`).json({
            code: 200,
            message: 'Admin Login Successful',
            data: user,
        }); 

        
    }catch(err){
        console.log(err);
        return response({
            req,
            res,
            code: 401,
            message: 'Authorization token is missing or invalid',
            data: {},
        });
    }
}
module.exports = {adminLogin};