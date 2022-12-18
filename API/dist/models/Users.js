"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Users = new mongoose_1.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    transactionworth: {
        type: Number,
    },
}, {
    timestamps: true,
});
module.exports = (0, mongoose_1.model)("users", Users);
