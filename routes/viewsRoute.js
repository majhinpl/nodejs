const express = require("express");
const router = express.Router();

const { renderHomepage } = require("../controllers/viewsController");

router.get("", renderHomepage);

module.exports = router;
