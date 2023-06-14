const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const bioSchema = new Schema({
  bioText: {
    id: String,
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  bioAuthor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Bio = model("Bio", bioSchema);

module.exports = Bio;
