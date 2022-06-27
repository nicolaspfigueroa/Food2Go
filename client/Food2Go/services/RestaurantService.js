const baseURL = 'http://localhost:3001/restaurant';

const restaurantService = {};

restaurantService.getRestaurants = () => {
  return fetch(`${baseURL}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

restaurantService.getRestaurant = (id) => {
  return fetch(`${baseURL}/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

export default restaurantService;

