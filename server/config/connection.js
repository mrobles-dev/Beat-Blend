const mongoose = require("mongoose");

const connectionURL

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/beatBlendDB"
);

module.exports = mongoose.connection;
