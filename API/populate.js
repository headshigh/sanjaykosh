const transaction = require("./dist/models/Transaction");
const mongoose = require("mongoose");
const del = async (req, res) => {
  await mongoose.connect(
    "mongodb+srv://nischal:720058726Nn1@cluster0.l67htts.mongodb.net/?retryWrites=true&w=majority"
  );
  const result = await transaction.deleteMany();
};
del();
