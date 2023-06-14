const mongoose = require("mongoose");
require('dotenv').config();

const connectionURL = "mongodb://localhost/frank_db";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

mongoose.set('debug', true);

module.exports = mongoose.connection;
