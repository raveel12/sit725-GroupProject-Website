var express = require("express");
const listingsController = require("../controllers/listingsController.js");

const router = express.Router();

router.get("/", listingsController.retrieveAllListings);

router.post("/", listingsController.postListing);

router.put("/:id", listingsController.updateListing);

router.delete("/:id", listingsController.deleteListing);

module.exports = router;
