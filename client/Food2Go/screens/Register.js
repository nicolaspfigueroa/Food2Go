//no auth required 
import { View, Text, TouchableOpacity } from 'react-native'
import {Input} from 'react-native-elements';
import React, { useState, useContext } from "react";
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import { AppContext } from '../App';

const initialState = {
  email: '',
  password: '',
  nickname: '',
};

const Register = (props) => {
  const [state, setState] = useState(initialState);

  //const {isAuthenticated, setIsAuthenticated} = useContext(AppContext);

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
      props.setIsAuthenticated(true);
      auth.login(() => navigation.navigate("Profile"));
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
      <Text>Register</Text>
        <Input
          placeholder="name@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <Input
          placeholder="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <Input
          placeholder="nickname"
          name="nickname"
          value={state.nickname}
          onChange={handleChange}
        />
        <TouchableOpacity className="form-submit" type="submit" disabled={validateForm()} onPress = {handleSubmit}>
          <Text>
            Register
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Register