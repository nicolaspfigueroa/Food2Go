const NGROK = require('../utils/ngrok');
const BASE_URL = `${NGROK}/dish`
//const baseURL = 'http://localhost:3001/dish';

const dishService = {};

dishService.getDishes = () => {
  return fetch(`${BASE_URL}/all`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

dishService.getDish = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

dishService.getRestaurantDishes = (id) => {
  return fetch(`${BASE_URL}/restaurant-dishes/${id}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((e) => e);
}

export default dishService;