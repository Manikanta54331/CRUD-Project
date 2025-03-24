const { sequelize } = require("../models");

const sequelizeErrorValidation = (error) => {
    if(error instanceof sequelize.ValidationError){
        return {
            code: 404,
            status: "Validation Error",
            errors: error.errors.map((err) => ({
                message: error.message,
                type: err.type,
                field: err.path,
                value: err.value
            })),
            data: {}
        };
    }else if (error instanceof sequelize.UniqueConstraintError){
        return {
            code: 404,
            status: "Unique_Controller_Error",
            errors: error.errors.map((err) => ({
                message: error.message,
                type: err.type,
                field: err.path,
                value: err.value
            })),
            data: {}
        };
    }else if (error instanceof sequelize.ForeignKeyConstraintError){
        return {
            code: 404,
            status: "Foreign_Key_Error",
            errors: error.errors.map((err) => ({
                message: error.message,
                type: err.type,
                field: err.path,
                value: err.value
            })),
            data: {}
        };      
    }else if (error instanceof sequelize.DatabaseError){
        return {
            code: 404,
            status: "Database_Error",
            errors: error.errors.map((err) => ({
                message: error.message,
                type: err.type,
                field: err.path,
                value: err.value
            })),
            data: {}
        };  
    }else if(error instanceof sequelize.ConnectionError){
        return {
            code: 404,
            status: "Connection_Error",
            errors: error.errors.map((err) => ({
                message: error.message,
                type: err.type,
                field: err.path,
                value: err.value
            })),
            data: {}
        };  
    }else{
        return{
            status: "unknown_error",
            code: 404,
            message: error.message,
            data:{}
        }
    }
}
module.exports={sequelizeErrorValidation}