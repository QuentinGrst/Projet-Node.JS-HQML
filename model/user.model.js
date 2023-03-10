const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  sexe: String,
  password: String,
  department: String,
});

module.exports = mongoose.model("User", User);

