const { Router } = require('express');
require('dotenv').config({path: '../.env'});
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripPublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require('stripe')(stripeSecretKey);
const router = Router();

YOUR_DOMAIN = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.res.title,
          },
          unit_amount: (item.price * 100) / item.quantity,
        },
        quantity: item.quantity
      }
    }),
    mode: 'payment',
    payment_method_types: ["card"],
    success_url: `${YOUR_DOMAIN}/checkout`,
    cancel_url: `${YOUR_DOMAIN}/checkout`,
  });

  res.json({url: session.url})
});

exports.stripeRouter = router;