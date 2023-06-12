const mongoose = require("mongoose");

const connectionURL = 'mongodb+srv://bradfh:brad@cluster1.ieklju5.mongodb.net/'

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

module.exports = mongoose.connection;
