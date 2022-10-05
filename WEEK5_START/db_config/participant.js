const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let participantSchema = new Schema({
  par_name: String,
  par_fruit: String,
  par_group_name: String,
  par_group_id: mongoose.Schema.Types.ObjectId
});

let Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;