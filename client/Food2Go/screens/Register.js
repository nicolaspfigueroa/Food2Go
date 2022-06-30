//no auth required 
import { View, Text, TouchableOpacity } from 'react-native'
import {Input} from 'react-native-elements';
import React, { useState, useContext } from "react";
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../App';

const initialState = {
  email: '',
  password: '',
  nickname: '',
};

const Register = (props) => {
  const [state, setState] = useState(initialState);

  const navigation = useNavigation();

  //const {isAuthenticated, setIsAuthenticated} = useContext(AppContext);

  // const handleChange = (e) => {
  //   console.log(e);
  //   const { name, value } = e.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async () => {
    // Check the client-session to see how to handle redirects
    // REMOVE-START

    //e.preventDefault();
    const { email, password, nickname } = state;
    const user = { email, password, nickname};
    const res = await apiServiceJWT.register(user);
    console.log(res);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      await AsyncStorage.setItem('accessToken', accessToken);
      props.setIsAuthenticated(true);
      setState(initialState);
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
          onChangeText={value => setState((prevState) => ({
            ...prevState,
            email: value
          }))}
        />
        <Input
          placeholder="password"
          name="password"
          secureTextEntry={true}
          value={state.password}
          onChangeText={value => setState((prevState) => ({
            ...prevState,
            password: value
          }))}
        />
        <Input
          placeholder="nickname"
          name="nickname"
          value={state.nickname}
          onChangeText={value => setState((prevState) => ({
            ...prevState,
            nickname: value
          }))}
        />
        <TouchableOpacity disabled={validateForm()} onPress = {handleSubmit}>
          <Text>
            Register
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Register