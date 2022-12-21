const mongoose = require("mongoose");

const Transacton = new mongoose.Schema(
  {
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
    balanceafter: {
      type: Number,
    },
  },
  { timestamps: true }
);
export {};
module.exports = mongoose.model("Transaction", Transacton);
