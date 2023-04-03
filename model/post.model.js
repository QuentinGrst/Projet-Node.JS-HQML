const mongoose = require('mongoose');
const { Schema } = mongoose;

const Post = new Schema({
  content: String,
  authorId: {type: String, ref: "User"},
  date: Date,
  picture: String,
  commentsId: [{type: String, ref: 'Comment'}]
});

module.exports = mongoose.model("Post", Post);

