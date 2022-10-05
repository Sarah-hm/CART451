const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let colorGroupSchema = new Schema({
  color: String,
  name: String,
  participants: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participant",
    },
  ]
});

let ColorGroup = mongoose.model("ColorGroup", colorGroupSchema);

module.exports = ColorGroup;