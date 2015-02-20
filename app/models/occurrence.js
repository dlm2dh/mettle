var mongoose = require("mongoose");

module.exports = mongoose.model("Occurrence", {
  event_id : mongoose.Schema.Types.ObjectId
  // TODO fill out rest of event occurrence metadata
});
