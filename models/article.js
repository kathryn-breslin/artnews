const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, unique: true, required: true },
    link: { type: String, unique: true, required: true },
    image: { type: String },
    saved: { type: Boolean, default: false }
  });
  
  const Article = mongoose.model("Article", articleSchema);
  
  module.exports = Article;