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
      owner_name: data.oname,
      owner_age: data.oage,
      house_number: data.hno,
      street: data.street,
      suburb: data.suburb,
      state: data.state,
      area_code: data.acode,
      img_path: data.path,
    };
    const result = await collection.insertOne(listing);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// async function updateListing(id, data) {
//   try {
//     const listing = {
//       owner_name: data.oname,
//       owner_age: data.oage,
//       house_number: data.hno,
//       street: data.street,
//       suburb: data.suburb,
//       state: data.state,
//       area_code: data.acode,
//       img_path: data.path,
//     };
//     const result = await collection.replaceOne(
//       { _id: new ObjectId(id) },
//       listing
//     );
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

// async function deleteListing(id) {
//   try {
//     const result = await collection.deleteOne({ _id: new ObjectId(id) });
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

module.exports = {
  getAllListings,
  addListing,
  // updateListing,
  // deleteListing,
};
