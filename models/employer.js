const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = require("./position");

const employerSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    trim: true,
    required: true
  },
  posted: [{ type: Schema.Types.ObjectId, ref: positionSchema }]
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
