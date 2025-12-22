const Razorpay = require("razorpay")

exports.handler = async (event) => {
  const { amount } = JSON.parse(event.body)

  const razorpay = new Razorpay({
    key_id: process.env.RZP_KEY_ID,
    key_secret: process.env.RZP_SECRET
  })

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: "receipt_" + 2592000000+Date.now()
  })

  return {
    statusCode: 200,
    body: JSON.stringify(order)
  }
}
