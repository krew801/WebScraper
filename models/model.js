const mongoose = require("mongoos");
const Schema = mongoos.Schema;
const ModelSchema = new Schema({
    title: String,
    body: String
});

const Model = mongoose.model("Model", ModelSchema);

module.exports = Model;