const express = require("express");
const router = express.Router();
const {
  renderRegisterPage,
  renderLoginPage,
  handleUserLogin,
  handleUserRegister,
} = require("../controllers/authController");

router.route("/register").get(renderRegisterPage).post(handleUserRegister);
router.route("/login").get(renderLoginPage).post(handleUserLogin);

module.exports = router;
