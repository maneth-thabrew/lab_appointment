const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    cardCvv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("payment", PaymentSchema);
