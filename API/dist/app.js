"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = require("./routes/routes");
app.use(express.json({ limit: "5mb" }));
require("dotenv").config();
Mongoose.set("strictQuery", false);
var cors = require("cors");
app.use(cors());
const start = () => {
    Mongoose.connect("mongodb+srv://nischal:720058726Nn1@cluster0.l67htts.mongodb.net/?retryWrites=true&w=majority").then(() => app.listen(5000, () => console.log("listening to the port & connected to database")));
};
start();
app.use("/api", router);
// connectDB(
//   "mongodb+srv://nischal:720058726Nn1@cluster0.l67htts.mongodb.net/?retryWrites=true&w=majority"
// ).then(() => {sdf
//   app.listen(process.env.PORT, () => {
//     console.log("app is listening to port ");
//   });
// });
