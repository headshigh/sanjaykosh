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
const mongoose = require("mongoose");
const Transaction = require("../models/Transaction");
const moment = require("moment-timezone");
const getbalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var x = 0;
        const forbalance = yield Transaction.aggregate([
            {
                $group: {
                    _id: "$transactiontype",
                    total: {
                        $sum: "$totalprice",
                    },
                },
            },
        ]);
        function findbal() {
            forbalance.forEach((element) => {
                if (element._id == "deposit") {
                    x = x + element.total;
                }
                else {
                    x = x - element.total;
                }
                return x;
            });
        }
        findbal();
        res.status(200).json({ balance: x });
    }
    catch (err) {
        res.status(500).json({ msg: err });
        console.log(err);
    }
});
const getalltransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = 20;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;
    console.log("query", req.query);
    try {
        var result;
        if (req.query.transactionby) {
            result = Transaction.find({
                transactionby: req.query.transactionby,
            });
        }
        else {
            result = Transaction.find({});
        }
        const result1 = yield result.sort("-createdAt").skip(skip).limit(limit);
        var x = 0;
        const forbalance = yield Transaction.aggregate([
            {
                $group: {
                    _id: "$transactiontype",
                    total: {
                        $sum: "$totalprice",
                    },
                },
            },
        ]);
        function findbal() {
            forbalance.forEach((element) => {
                if (element._id == "deposit") {
                    x = x + element.total;
                }
                else {
                    x = x - element.total;
                }
                return x;
            });
        }
        findbal();
        res.status(200).json({
            msg: result1,
            balance: x,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const createtransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //type of req
    const { nameofitem, totalprice, remarks, transactionby, transactiontype } = req.body;
    console.log(req.body);
    try {
        var date = new Date();
        var x = 0;
        const forbalance = yield Transaction.aggregate([
            {
                $group: {
                    _id: "$transactiontype",
                    total: {
                        $sum: "$totalprice",
                    },
                },
            },
        ]);
        function findbal() {
            forbalance.forEach((element) => {
                if (element._id == "deposit") {
                    x = x + element.total;
                }
                else {
                    x = x - element.total;
                }
                return x;
            });
        }
        findbal();
        var balanceaftertrans;
        if (transactiontype == "deposit") {
            balanceaftertrans = x + totalprice;
        }
        else {
            balanceaftertrans = x - totalprice;
        }
        const datenepal = moment.tz(Date.now(), "Asia/Kathmandu");
        const result = yield Transaction.create({
            nameofitem: nameofitem,
            totalprice: totalprice,
            remarks: remarks,
            transactionby: transactionby,
            transactiontype: transactiontype,
            balanceafter: balanceaftertrans,
            transactiontime: datenepal,
        });
        if (result) {
            return res.status(200).json({ result });
        }
        else {
            return res
                .status(500)
                .json({ msg: "unable to create a new transaction" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
});
module.exports = { createtransaction, getalltransaction, getbalance };
