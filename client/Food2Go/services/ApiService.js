import AsyncStorage from '@react-native-async-storage/async-storage';
const NGROK = require('../utils/ngrok');
const BASE_URL = `${NGROK}/user`

const apiService = {};

apiService.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.profile = (accessToken) => {
  return fetch(`${BASE_URL}/me`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.logout = (tokenName) => {
  // delete token from local storage here
  AsyncStorage.removeItem(tokenName);
  // the following request should invalidate the token
  // return fetch(`${BASE_URL}/logout`, {
  //   method: 'POST',
  //   credentials: 'include',
  //   mode: 'cors',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${tokenName}`,
  //   },
  // })
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));
};

export default apiService;
