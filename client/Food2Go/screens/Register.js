//no auth required 
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import {Input} from 'react-native-elements';
import React, { useState } from "react";
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import logRegisterStyles from '../constants/styles/LogRegisterStyles';
import assets from '../constants/assets';

const initialState = {
  email: '',
  password: '',
  nickname: '',
};

const Register = (props) => {
  const [state, setState] = useState(initialState);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    // Check the client-session to see how to handle redirects
    const { email, password, nickname } = state;
    const user = { email, password, nickname};
    const res = await apiServiceJWT.register(user);
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
    <SafeAreaView style = {{ flex: 1}}>
      <View>
        <View style = {logRegisterStyles.header}>
          <Image
            source={assets.registerimage}
            resizeMode = "cover"
            style = {logRegisterStyles.banner} 
          />
        </View>
        <Text style = {logRegisterStyles.title}>Register</Text>
        <Text style = {logRegisterStyles.instructions}>Enter email, password and nickname</Text>
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
          <TouchableOpacity disabled={validateForm()} onPress = {handleSubmit}
            style = {logRegisterStyles.button}>
            <Text style={logRegisterStyles.textInButton}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
            <Text style = {logRegisterStyles.bottomText}>
              Already have an account
              <Text style={{color: "#38B000"}}>  Log in!</Text>
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register