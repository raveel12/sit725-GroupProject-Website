const ObjectId = require("mongodb").ObjectId;
const { retrieveCollection } = require("../dbConnection");

let collection;
retrieveCollection().then((res) => (collection = res));

async function getAllListings(query) {
  try {
    const mongoQuery = {};
    if (query.gt === 'false') {
      mongoQuery.price = { $lt: parseInt(query.price) };
    } else if (query.gt === 'true') {
      mongoQuery.price = { $gte: parseInt(query.price) };
    }
    const result = await collection.find(mongoQuery).toArray();
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
async function addListing(data) {
  try {
    const listing = {
      description: data.description,
      ono: data.ono,
      oname: data.oname,
      oage: parseInt(data.oage),
      hno: data.hno,
      street: data.street,
      suburb: data.suburb,
      state: data.state,
      acode: data.acode,
      path: data.path,
      price: parseInt(data.price),
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
