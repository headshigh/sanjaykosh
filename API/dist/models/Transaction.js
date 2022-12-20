"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Transacton = new mongoose.Schema({
    nameofitem: {
        type: String,
        // required: [true, "name of item is required"],
    },
    transactiontype: {
        type: String,
    },
    totalprice: {
        type: Number,
        // required: [true, "total price is required"],
    },
    remarks: {
        type: String,
    },
    transactionby: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose.model("Transaction", Transacton);
