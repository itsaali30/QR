const crypto = require("crypto")

exports.handler = async (event) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  } = JSON.parse(event.body)

  const body = razorpay_order_id + "|" + razorpay_payment_id

  const expected = crypto
    .createHmac("sha256", process.env.RZP_SECRET)
    .update(body)
    .digest("hex")

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: expected === razorpay_signature
        ? "PAYMENT VERIFIED ✅"
        : "PAYMENT FAILED ❌"
    })
  }
}

