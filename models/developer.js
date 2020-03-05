const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = require("./position");

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
  companyName: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true,
    enum: ["West-Coast", "East-Coast", "Mid-West"]
  },
  appliedTo: [{ type: Schema.Types.ObjectId, ref: positionSchema }]
});

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;
