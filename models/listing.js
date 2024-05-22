const ObjectId = require("mongodb").ObjectId;
const { retrieveCollection } = require("../dbConnection");

let collection;
retrieveCollection().then((res) => (collection = res));

async function getAllListings() {
  try {
    const result = await collection.find().toArray();
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
async function addListing(data) {
  try {
    const listing = {
      owner_name: data.owner_name,
      owner_age: data.owner_age,
      house_number: data.house_number,
      street: data.street,
      suburb: data.suburb,
      state: data.state,
      area_code: data.area_code,
    };
    const result = await collection.insertOne(listing);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function updateListing(id, data) {
  try {
    const listing = {
      owner_name: data.owner_name,
      owner_age: data.owner_age,
      house_number: data.house_number,
      street: data.street,
      suburb: data.suburb,
      state: data.state,
      area_code: data.area_code,
    };
    const result = await collection.replaceOne(
      { _id: new ObjectId(id) },
      listing
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function deleteListing(id, data) {
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  getAllListings,
  addListing,
  updateListing,
  deleteListing,
};
