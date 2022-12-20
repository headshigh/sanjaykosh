const JWT = require("jsonwebtoken");
import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
interface user {
  name: string;
  username: string;
  password: string;
  transactionworth: Number;
}
const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jwt } = req.body;
  if (!jwt) {
    res.status(404).json("token is not provided");
  }
  JWT.verify(jwt, "asjfkasldfj", (err: JsonWebTokenError, user: user) => {
    if (!err) {
      next();
    } else {
      console.log(err);
      res.status(404).json("you are not authenticated");
    }
  });
};
module.exports = authenticate;
