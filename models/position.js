const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employerSchema = require("./employer");
const developerSchema = require("./developer");

const positionSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  position: {
    type: String,
    trim: true,
    required: true,
    enum: ["Front End Developer", "Back End Developer", "Full Stack Developer"]
  },
  salary: {
    type: Number,
    required: true
  },
  applicants: [{ type: Schema.Types.ObjectId, ref: developerSchema }],
  company: { type: Schema.Types.ObjectId, ref: employerSchema }
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
