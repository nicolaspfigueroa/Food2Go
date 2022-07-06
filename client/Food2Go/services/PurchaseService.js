const NGROK = require('../utils/ngrok');
const BASE_URL = `${NGROK}/purchase`
//const baseURL = 'http://localhost:3001/purchase';

const purchaseService = {};

purchaseService.postPurchase = (item) => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

purchaseService.getAllPurchases = (id) => {
  return fetch(`${BASE_URL}/get/${id}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((e) => e);
}

export default purchaseService;