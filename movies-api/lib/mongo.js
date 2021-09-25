const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  contructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbname = DB_NAME;
  }

  connect() {
    if (MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }

          console.log('Connected succesfuly to MongoDB');
          resolve(this.client.db(this.dbname));
        });
      });
    }
    return MongoLib.connection;
  }
}

module.exports = MongoLib;
