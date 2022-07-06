const NGROK = require('../utils/ngrok');
const BASE_URL = `${NGROK}/purchase`
//const baseURL = 'http://localhost:3001/purchase';

const purchaseService = {};

purchaseService.postPurchase = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

purchaseService.getAllPurchases = (id) => {
  return fetch(`${BASE_URL}/${id}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((e) => e);
}

export default purchaseService;