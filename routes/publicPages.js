var express = require("express");
const router = express.Router();

const publicPagesController = require("../controllers/publicPagesController");

router.get("/", publicPagesController.renderHomePage);

router.get("/home", publicPagesController.renderHomePage);

router.get("/sell", publicPagesController.renderSellerPage);

router.get("/buy", publicPagesController.renderBuyerPage);

router.get("/about", publicPagesController.renderAboutPage);

module.exports = router;
