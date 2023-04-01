const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "E-comm";
const client = new MongoClient(url);


async function dbconnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
  console.log("hello");
}

module.exports = dbconnect;
