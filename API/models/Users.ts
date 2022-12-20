import { Schema, model, connect } from "mongoose";
interface user {
  name: string;
  username: string;
  password: string;
  transactionworth: Number;
}
const Users = new Schema<user>(
  {
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
  },
  {
    timestamps: true,
  }
);
module.exports = model<user>("users", Users);
