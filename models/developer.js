const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = require("./job");

const developerSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName:{
    type: String,
    trim: true,
    required: true
  },
  emailAddress:{
    type: String,
    trim: true,
    require: true
  },
  devType:{
    type: String,
    trim: true,
    required: true,
    default: "fullStack"
  },
  empType:{
    type: String,
    trim: true,
    default: "fullTime"
  },
  languages:[String],
  location: {
    type: String,
    required: true,
    trim: true,
    enum: ["West-Coast", "East-Coast", "Mid-West"]
  },
  profile:{
    type: String,
    default: "Passionate developer seeking employment!"
  },
  appliedTo: [{ type: Schema.Types.ObjectId, ref: "Job" }]
});

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;
