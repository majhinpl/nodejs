renderHomepage = (req, res) => {
  res.render("home", { isAuthenticated: req.isAuthenticated });
};

module.exports = {
  renderHomepage,
};
