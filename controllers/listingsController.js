const ListingModel = require("../models/listing");
const retrieveAllListings = async (req, res) => {
  const result = await ListingModel.getAllListings(req.query);
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

//Update and Delete afterwards

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
  // updateListing,
  // deleteListing,
};
