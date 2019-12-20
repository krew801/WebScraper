//create article model for mongoose

const mongoose = require("mongoose");

//this is a schema object from mongoose
const Schema=mongoose.Schema;

//create article schema
const ArticleSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    snipText:{
        type: String
    },
    imageLink:{
        type: String
    },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: "Comment"   
    }]

});

//create a model from ArticleSchema
//this will creatt the collection in mongo
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;