const express = require("express")
const router = express.Router()
const { adminAuth,addemployee } = require("./auth")
const { register, login, update, deleteUser } = require("./auth");
router.route("/register").post(register)
router.route("/login").post(login);
router.route("/update").put(adminAuth, update)
router.route("/deleteUser").delete(adminAuth, deleteUser)
router.route("/add").post(addemployee);
module.exports = router