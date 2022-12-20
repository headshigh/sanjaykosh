const mongoose = require("mongoose");
const connectDB = async (url: String): Promise<any> => {
  await mongoose.connect(url);
  console.log("connected to the database");
};

module.exports = connectDB;
export {};
