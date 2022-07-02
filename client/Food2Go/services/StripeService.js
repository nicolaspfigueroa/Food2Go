const NGROK = require('../utils/ngrok');
const BASE_URL = `${NGROK}/payment`
//const BASE_URL = 'http://localhost:3001/payment';

const stripeService = {};

stripeService.createCheckoutSession = (cart) => {
  console.log(cart);
  return fetch(`${BASE_URL}/create-checkout-session`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart)
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
};

stripeService.fetchPaymentSheetParams = async (cart) => {
  const response = await fetch(`${BASE_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart)
  });
  const { paymentIntent, ephemeralKey, customer} = await response.json();

  return {
    paymentIntent,
    ephemeralKey,
    customer,
  };
};

export default stripeService;