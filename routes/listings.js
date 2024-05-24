var express = require("express");
const router = express.Router();

const listingsController = require("../controllers/listingsController.js");

router.get("/", listingsController.retrieveAllListings);

router.post("/", listingsController.postListing);

// router.put("/:id", listingsController.updateListing);

// router.delete("/:id", listingsController.deleteListing);

module.exports = router;
