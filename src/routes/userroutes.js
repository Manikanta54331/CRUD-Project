const express = require("express");
const router = express.Router();

const { createUserController } = require("../controllers/userController/createUserController.js");

const { getUserController } = require("../controllers/userController/getUserController.js");
const { getUserByIdController } = require("../controllers/userController/getUserByIdController.js");
const { updateUserController } = require("../controllers/userController/updateUserController.js");
const { deleteUserController } = require("../controllers/userController/deleteUserController.js");
const { protect } = require("../authentication/protect.js");
const { adminLogin } = require("../controllers/userController/adminLogin.js");
const { createUserValidation } = require("../validations/userValidation/createUserValidation.js");
const { getUserByIdValidation } = require("../validations/userValidation/getUserValidation.js");
const { updateUserByIdValidation } = require("../validations/userValidation/updateUserValidation.js");
const checkExtraFields = require("../validations/userValidation/checkExtraFields.js");

router.post("/addUser", protect, createUserValidation,checkExtraFields,createUserController);
router.get("/getUser",protect,getUserController);
router.get("/getUserById/:id", protect,getUserByIdValidation, getUserByIdController);
router.put("/updateUser/:id", protect,updateUserByIdValidation,updateUserController);
router.delete("/deleteUser/:id",protect,getUserByIdValidation ,deleteUserController);
router.post("/adminLogin",adminLogin);
module.exports = router;
