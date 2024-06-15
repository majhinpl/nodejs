const express = require("express");
const bcrypt = require("bcrypt");
const { users } = require("../model");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.send("please provide username, email, password !!");
  }
  await users.create({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  console.log("user created");
  return res.redirect("login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("Please provide email,password");
  }

  //email check
  const [data] = await users.findAll({
    where: {
      email: email,
    },
  });

  if (data) {
    // check password
    const isMatched = bcrypt.compareSync(password, data.password);

    if (isMatched) {
      res.send("Logged in success");
    } else {
      res.send("Invalid Password");
    }
  } else {
    res.send("No user with that email");
  }
});

module.exports = router;
