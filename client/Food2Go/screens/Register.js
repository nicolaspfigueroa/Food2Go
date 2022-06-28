//no auth required 
import { View, Text } from 'react-native'
import React from 'react'
import { useState, useContext } from "react";
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import { AppContext } from '../App';

const initialState = {
  email: '',
  password: '',
  nickname: '',
};

const Register = () => {
  const [state, setState] = useState(initialState);

  const {isAuthenticated, setIsAuthenticated} = useContext(AppContext);
  console.log(isAuthenticated);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // Check the client-session to see how to handle redirects
    // REMOVE-START
    console.log(props);
    e.preventDefault();
    const { email, password, nickname } = state;
    const user = { email, password, nickname};
    const res = await apiServiceJWT.register(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
      auth.login(() => navigation.navigate('/profile'));
    }
    // REMOVE-END
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.nickname
    );
  };

  return (
    <View>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="nickname"
          name="nickname"
          value={state.nickname}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          Register
        </button>
      </form>
    </View>
  )
}

export default Register