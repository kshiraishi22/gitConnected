const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    
})

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;