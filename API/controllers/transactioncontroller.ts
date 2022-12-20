const mongoose = require("mongoose");
import express, { Express, Request, Response } from "express";
const Transaction = require("../models/Transaction");
const getalltransaction = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 1;
  const skip = (page - 1) * 20;
  try {
    const result = Transaction.find({});
    const result1 = await result.sort("-createdAt").skip(skip);
    res.status(200).json({ msg: result1 });
  } catch (err) {
    console.log(err);
  }
};
const createtransaction = async (req: Request, res: Response) => {
  //type of req
  const { nameofitem, totalprice, remarks, transactionby, transactiontype } =
    req.body;
  console.log(req.body);
  try {
    var date = new Date();

    const result = await Transaction.create({
      nameofitem: nameofitem,
      totalprice: totalprice,
      remarks: remarks,
      transactionby: transactionby,
      transactiontype: transactiontype,
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
module.exports = { createtransaction, getalltransaction };
