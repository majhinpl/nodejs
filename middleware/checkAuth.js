// middleware/checkAuth.js
const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  const token = req.cookies.jwtToken;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWTSECRET);
      req.isAuthenticated = true;
    } catch (err) {
      req.isAuthenticated = false;
    }
  } else {
    req.isAuthenticated = false;
  }
  next();
}

module.exports = checkAuth;
