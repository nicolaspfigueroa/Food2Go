const { Router } = require('express');
require('dotenv').config({path: '../.env'});
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require('stripe')(stripeSecretKey);
const router = Router();

YOUR_DOMAIN = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
  console.log('server', req.body);
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price
        },
        quantity: 1
      }
    }),
    mode: 'payment',
    payment_method_types: ["card"],
    success_url: `${YOUR_DOMAIN}/checkout`,
    cancel_url: `${YOUR_DOMAIN}/checkout`,
  });

  res.json({url: session.url})
});

router.post('/checkout', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: stripePublicKey
  });
});

exports.stripeRouter = router;