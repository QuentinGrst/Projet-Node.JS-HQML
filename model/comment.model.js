const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comment = new Schema({
  content: String,
  authorId: { type: String, ref: "User" },
  date: Date
});

module.exports = mongoose.model("Comment", Comment);