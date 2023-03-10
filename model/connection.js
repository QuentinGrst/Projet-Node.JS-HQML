const mongoose = require("mongoose");

exports.connect = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/hqml-db");
  console.log("MongoDB connection set up");
}
