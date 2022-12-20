const express = require("express");
const router = express.Router();
const authenticate = require("../authenticate");

const {
  createtransaction,
  getalltransaction,
} = require("../controllers/transactioncontroller");
const { login } = require("../controllers/usercontroller");
router.route("/transactions").post(createtransaction).get(getalltransaction);
router.route("/login").post(login);
export {};
module.exports = router;
