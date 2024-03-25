const express = require("express");
const paymentController = require("../controller/payementController");

const router = express.Router();

router.post("/save-payment", paymentController.savePayment);

module.exports = router;
