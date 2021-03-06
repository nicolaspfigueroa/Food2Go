const NGROK = require('../utils/ngrok');
const BASE_URL = `${NGROK}/restaurant`
//const baseURL = 'http://localhost:3001/restaurant';

const restaurantService = {};

restaurantService.getRestaurants = () => {
  return fetch(`${BASE_URL}/all`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

restaurantService.getRestaurant = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

export default restaurantService;

