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
  salary: {
    type: Number,
    required: true
  },
  applicants: [{ type: Schema.Types.ObjectId, ref: "Developer" }],
  company: { type: Schema.Types.ObjectId, ref: "Employer" }
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
