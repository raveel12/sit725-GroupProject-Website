const renderHomePage = async (req, res) => {
  res.redirect("home.html");
};

const renderSellerPage = async (req, res) => {
  res.redirect("sell.html");
};

const renderBuyerPage = async (req, res) => {
  res.redirect("buy.html");
};

const renderAboutPage = async (req, res) => {
  res.redirect("about.html");
};

module.exports = {
  renderHomePage,
  renderSellerPage,
  renderBuyerPage,
  renderAboutPage,
};
