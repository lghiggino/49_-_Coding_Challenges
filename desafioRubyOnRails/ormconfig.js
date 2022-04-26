const Cnab = require('./src/models/Cnab');
const Class = require('./src/models/Class');

module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "admin",
  "database": "postgres",
  "entities": [
    Cnab, Class
  ],
  "synchronize": true,
  "migrations": [
    "src/migrations/**/*.ts"
  ],
  // extra: {
  //   ssl: true
  // }
  // "cli": {
  //   "migrationsDir": [
  //     "src/migrations/"
  //   ],
  //   "entitiesDir": "src/models"
  // }
}