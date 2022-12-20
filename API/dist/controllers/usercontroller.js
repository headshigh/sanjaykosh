"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const users = require("../models/Users");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        console.log(username);
        const result = yield users.findOne({ username: "suman" });
        if (!result) {
            return res.status(404).json({ msg: "no user found with the username " });
        }
        else {
            console.log(result);
            if (result.password == password) {
                const token = yield jwt.sign({ username, password }, "asjfkasldfj");
                if (token) {
                    console.log(token);
                    return res.status(200).json({ token: token, user: result });
                }
                else {
                    return res.status(500).json({ err: "unable to generate token" });
                }
            }
            else {
                return res.status(500).json({ msg: "wrong password" });
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errror: err });
    }
});
module.exports = { login };
