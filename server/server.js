const express = require("express");
const cors = require("cors");
const products = require("./products.json");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "https://www.google.com/",
      cancel_url: "http://www.studio404.net/",
    });

    res.json({url: session.url});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

let port = 5000;
app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
