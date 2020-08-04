const { MongoClient } = require('mongodb');
const { db } = require('../config')

const ConnectDB = () => {
  try {
    let url = `mongodb+srv://${db.DB_USER}:${db.DB_PASSWORD}@${db.DB_HOST}/${db.DB_NAME}`;
    return new Promise((resolve, reject) => {
      var settings = {
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 100,
        autoReconnect: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 2
      };
      let client = new MongoClient(url, settings);
      client.connect().then(() => {
        resolve(client.db(db.DB_NAME))
      }).catch(err => {
        reject(err)
      })
    })
  } catch (error) {
    nl.register(`Error en la conexion de la base de datos de mongo historico, el detalle es: ${error}`).error();
  }
}

module.exports = {
  ConnectDB
}