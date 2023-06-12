const mongoose = require("mongoose");

const connectionURL = "mongodb://localhost:27017/Beat-Blend";

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



///mongodb://localhost:27017/