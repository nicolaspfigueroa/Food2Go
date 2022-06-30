const NGROK = require('../utils/ngrok');
const BASE_URL = `${NGROK}/payment`
//const BASE_URL = 'http://localhost:3001/payment';

// possible to refactor into a 'fetch factory' to reduce repetition

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

export default stripeService;