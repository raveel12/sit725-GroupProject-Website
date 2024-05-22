const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_DB_URI;

let collection;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function runDBConnection() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected");
    collection = client.db().collection("Listing");
  } catch (ex) {
    console.error(ex);
  }
}

runDBConnection();

module.exports.retrieveCollection = async function () {
  if (!collection) {
    await runDBConnection();
  }
  return collection;
};
