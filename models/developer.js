const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developerSchema = new Schema({

})

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;