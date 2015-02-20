var mongoose = require("mongoose");

module.exports = mongoose.model("Event", {
  name : String,
  type : String,
  element : String,
  target : String
});
