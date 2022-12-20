import e, { Request, Response } from "express";
const users = require("../models/Users");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");
const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    const result = await users.findOne({ username: "suman" });
    if (!result) {
      return res.status(404).json({ msg: "no user found with the username " });
    } else {
      console.log(result);
      if (result.password == password) {
        const token = await jwt.sign({ username, password }, "asjfkasldfj");
        if (token) {
          console.log(token);
          return res.status(200).json({ token: token, user: result });
        } else {
          return res.status(500).json({ err: "unable to generate token" });
        }
      } else {
        return res.status(500).json({ msg: "wrong password" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errror: err });
  }
};
export {};
module.exports = { login };
