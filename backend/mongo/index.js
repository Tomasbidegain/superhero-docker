const { MongoClient } = require('mongodb')
const URI = 'mongodb://172.21.0.2:27017/super_heroes';

// Create Instance of MongoClient for mongodb
const client = new MongoClient(URI)

// Connect to database
client.connect()
    .then(() => console.log('Conectado a la base de datos super_heroes'))
    .catch(error => console.log('Conexion fallida', error))


module.exports = { client }