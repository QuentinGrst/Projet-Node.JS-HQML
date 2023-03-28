const mongoose = require('mongoose');
const { Schema } = mongoose;

const Post = new Schema({
  content: String,
  author: String,
  date: Date,
  picture: String,
  comments: [String]
});

module.exports = mongoose.model("Post", Post);

