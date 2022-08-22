const mongoose = require('mongoose');
const dbName = process.env.DB_NAME || 'schedulex';

mongoose
  .connect('mongodb://localhost:27017/'+dbName)
  .then(() => console.info(`Connection establised to ${dbName}`))
  .catch((err) =>
    console.error(`Could not connect to database: ${err.message}`)
  );