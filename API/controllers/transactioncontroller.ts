const mongoose = require("mongoose");
import express, { Express, query, Request, Response } from "express";
import { isElementAccessExpression } from "typescript";
const Transaction = require("../models/Transaction");
interface obj {
  _id: String;
  total: number;
}
const moment = require("moment-timezone");
const getbalance = async (req: Request, res: Response) => {
  try {
    var x: number = 0;
    const forbalance: [obj] = await Transaction.aggregate([
      {
        $group: {
          _id: "$transactiontype",
          total: {
            $sum: "$totalprice",
          },
        },
      },
    ]);

    forbalance.forEach((element: obj) => {
      if (element._id == "deposit") {
        x = x + element.total;
      } else {
        x = x - element.total;
      }
      return x;
    });

    res.status(200).json({ balance: x });
  } catch (err) {
    res.status(500).json({ msg: err });
    console.log(err);
  }
};
const getalltransaction = async (req: Request, res: Response) => {
  const limit = 20;
  const page: number = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;
  console.log("query", req.query);

  try {
    var result;
    if (req.query.transactionby) {
      result = Transaction.find({
        transactionby: req.query.transactionby,
      });
    } else {
      result = Transaction.find({});
    }
    if (req.query.transactionby) {
      var count = await Transaction.countDocuments({
        transactionby: req.query.transactionby,
      });
    } else {
      count = await Transaction.countDocuments({});
    }

    console.log(count);
    const result1 = await result.sort("-createdAt").skip(skip).limit(limit);
    var x: number = 0;
    const forbalance: [obj] = await Transaction.aggregate([
      {
        $group: {
          _id: "$transactiontype",
          total: {
            $sum: "$totalprice",
          },
        },
      },
    ]);

    forbalance.forEach((element: obj) => {
      if (element._id == "deposit") {
        x = x + element.total;
      } else {
        x = x - element.total;
      }
    });

    res.status(200).json({
      msg: result1,
      balance: x,
      count: count,
    });
  } catch (err) {
    console.log(err);
  }
};
const deletetransaction = async (req: Request, res: Response) => {
  const { transactionid } = req.query;
  console.log(transactionid);
  res.status(200).json(transactionid);
  await Transaction.deleteOne({ _id: transactionid });
};
const createtransaction = async (req: Request, res: Response) => {
  //type of req
  const { nameofitem, totalprice, remarks, transactionby, transactiontype } =
    req.body;
  console.log(req.body);
  try {
    var date = new Date();
    var x: number = 0;
    const forbalance: [obj] = await Transaction.aggregate([
      {
        $group: {
          _id: "$transactiontype",
          total: {
            $sum: "$totalprice",
          },
        },
      },
    ]);

    forbalance.forEach((element: obj) => {
      if (element._id == "deposit") {
        x = x + element.total;
      } else {
        x = x - element.total;
      }
    });

    var balanceaftertrans;
    if (transactiontype == "deposit") {
      balanceaftertrans = x + totalprice;
    } else {
      balanceaftertrans = x - totalprice;
    }
    const datenepal = moment.tz(Date.now(), "Asia/Kathmandu");

    const result = await Transaction.create({
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
    } else {
      return res
        .status(500)
        .json({ msg: "unable to create a new transaction" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};
module.exports = {
  createtransaction,
  getalltransaction,
  getbalance,
  deletetransaction,
};
