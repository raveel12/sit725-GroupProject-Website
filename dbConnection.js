const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = "mongodb+srv://raavi01:123456789hacked@cluster1.rpqgmrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const uri = "mongodb+srv://VarunVK:Varun%40Mongo@sit725.ml9nzrr.mongodb.net/?retryWrites=true&w=majority&appName=SIT725"
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
    collection = client.db('Property_Database').collection("Listing");
  } catch (ex) {
    console.error("Error found at MongoDB connection: " + ex);
  }
}

runDBConnection();

module.exports.retrieveCollection = async function () {
  if (!collection) {
    await runDBConnection();
  }
  return collection;
};