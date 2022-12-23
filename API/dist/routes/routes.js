"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const authenticate = require("../authenticate");
const { createtransaction, getalltransaction, getbalance, } = require("../controllers/transactioncontroller");
const { login } = require("../controllers/usercontroller");
router
    .route("/transactions")
    .post(authenticate, createtransaction)
    .get(getalltransaction);
router.route("/login").post(login);
router.route("/balance").get(getbalance);
module.exports = router;
