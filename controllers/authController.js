const { users } = require("../model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

renderRegisterPage = (req, res) => {
  res.render("auth/register");
};

renderLoginPage = (req, res) => {
  res.render("auth/login");
};

handleUserRegister = async (req, res) => {
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
};

handleUserLogin = async (req, res) => {
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
      const token = jwt.sign({ id: data.id }, process.env.JWTSECRET, {
        expiresIn: "21d",
      });
      res.cookie("jwtToken", token).redirect("/");
    } else {
      res.send("Invalid Password");
    }
  } else {
    res.send("No user with that email");
  }
};

module.exports = {
  renderRegisterPage,
  renderLoginPage,
  handleUserRegister,
  handleUserLogin,
};
