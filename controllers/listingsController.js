const ListingModel = require("../models/listing");
const renHtml = async (req, res) => {
  res.render('home.html');
  res.render('sell.html');
  res.render('buy.html');
  res.render('about.html');
};
const retrieveAllListings = async (req, res) => {
  const result = await ListingModel.getAllListings();
  // Print returned documents

  res.json({
    statusCode: 200,
    data: result,
    message: "get all listings success",
  });
};

const postListing = async (req, res) => {
  await ListingModel.addListing(req.body);
  res.json({
    statusCode: 200,
    message: "post a listing success",
  });
};

// const updateListing = async (req, res) => {
//   await ListingModel.updateListing(req.params.id, req.body);
//   res.json({
//     statusCode: 200,
//     message: "updated listing successfully",
//   });
// };

// const deleteListing = async (req, res) => {
//   await ListingModel.deleteListing(req.params.id, req.body);
//   res.json({
//     statusCode: 200,
//     message: "post a listing success",
//   });
// };

module.exports = {
  retrieveAllListings,
  postListing,
  renHtml
  // updateListing,
  // deleteListing,
};
