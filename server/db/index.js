const { MongoClient } = require("mongodb");
const defaultConnectionString = "mongodb://localhost:27017/hangman";
const defaultOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
let db = null;

function mongoConnect() {
  console.log("Using connection string: " + defaultConnectionString);
  return new Promise((resolve, reject) => {
    if (db) resolve(db);
    else {
      MongoClient.connect(
        defaultConnectionString,
        defaultOptions,
        (err, client) => {
          if (err) reject(err);
          else {
            console.log("Mongo connection SUCCESSFUL");
            if (db) resolve(db);
            db = client.db(process.env.MONGO_DB_NAME);
            resolve(db);
          }
        }
      );
    }
  });
}

module.exports = { mongoConnect };
