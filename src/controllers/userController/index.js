const {createUserController} = require("./createUserController.js");
const {getUserController} = require("./getUserController.js");
const {getUserByIdController} = require("./getUserByIdController.js");
const {updateUserController} = require("./updateUserController.js");
const {deleteUserController} = require("./deleteUserController.js");
module.exports = { createUserController, getUserController, getUserByIdController, updateUserController, deleteUserController };