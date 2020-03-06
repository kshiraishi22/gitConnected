const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  type:{
    type: String,
    trim: true,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  applicants: [{ type: Schema.Types.ObjectId, ref: "Developer" }],
  company: { type: Schema.Types.ObjectId, ref: "Employer" },
  description: {
    type: String,
    trim: true,
    required: true,
    default: "Gainful opportunity with the chance for growth"
  }
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
