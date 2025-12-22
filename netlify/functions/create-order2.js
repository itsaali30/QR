const Razorpay = require("razorpay");

exports.handler = async (event) => {
  try {
    // Only allow POST
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed"
      };
    }

    // Parse JSON body
    const { amount } = JSON.parse(event.body || "{}");

    if (!amount || amount <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid amount" })
      };
    }

    // Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env..RZP_KEY_ID,
      key_secret: process.env.RZP_SECRET
    });

    // Create order
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now()
    });

    // Return minimal safe response
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        key: process.env.RZP_KEY_ID
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
