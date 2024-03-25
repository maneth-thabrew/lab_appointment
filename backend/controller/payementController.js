const Payment = require("../model/payment");

const savePayment = async (req, resp) => {
  try {
    const blogs = new Payment({
      name: req.body.name,
      cardNumber: req.body.cardNumber,
      cardCvv: req.body.cardCvv,
    });

    await blogs
      .save()
      .then((result) => {
        resp.status(200).json({
          message: "Data inserted successfully",
          data: result,
        });
      })
      .catch((error) => {
        resp.json(error);
      });
  } catch {
    resp.status(500).json({
      message: "Bad request",
    });
  }
};

module.exports = {
  savePayment,
};
