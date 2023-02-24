const express = require("express");
const router = express.Router();
const authenticate = require("../authenticate");

const {
  createtransaction,
  getalltransaction,
  getbalance,
  deletetransaction,
} = require("../controllers/transactioncontroller");
const { login } = require("../controllers/usercontroller");
router
  .route("/transactions")
  .post(authenticate, createtransaction)
  .get(getalltransaction)
  .delete(deletetransaction);

router.route("/login").post(login);
router.route("/balance").get(getbalance);
export {};
module.exports = router;
