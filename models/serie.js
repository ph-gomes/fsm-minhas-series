const mongoose = require("mongoose");

const SerieSchema = mongoose.Schema({
  name: String,
  status: {
    type: String,
    enumValues: ["to-watch", "watching", "watched"]
  },
  comments: [String]
});

module.exports = mongoose.model("Serie", SerieSchema);
