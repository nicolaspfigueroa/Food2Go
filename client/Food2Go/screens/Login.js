//no auth required 
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import {Input} from 'react-native-elements';
import React, { useState, useContext } from "react";
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../App';
import FocusedStatusBar from '../components/FocusedStatusBar/FocusedStatusBar';
import assets from '../constants/assets';
import logRegisterStyles from '../constants/styles/LogRegisterStyles';

const initialState = {
  email: '',
  password: '',
};

const Login = (props) => {

const [state, setState] = useState(initialState);
const navigation = useNavigation();

const handleSubmit = async () => {
  const { email, password } = state;
  const user = { email, password};
  const res = await apiServiceJWT.login(user);
  if (res.error) {
    alert(`${res.message}`);
    setState(initialState);
  } else {
    const { accessToken } = res;
    await storeAuth(accessToken);
    props.setIsAuthenticated(true);
    setState(initialState);
    auth.login(() => navigation.navigate("Profile"));
  }
  // REMOVE-END
};

const storeAuth = async (value) => {
  try {
    await AsyncStorage.setItem('accessToken', value)
  } catch (error) {
    console.log(error);
  }
}

const validateForm = () => {
  return (
    !state.email || !state.password 
  );
};

  return (
    <SafeAreaView style = {{ flex: 1}}>
      <FocusedStatusBar backgroundColor = {"black"}></FocusedStatusBar>
      <View>
        <View style = {logRegisterStyles.header}>
          <Image 
            source={assets.homeimage}
            resizeMode = "cover"
            style= {logRegisterStyles.banner}
          >
          </Image>
        </View>
        <Text style = {logRegisterStyles.title}>Login</Text>
        <Text style = {logRegisterStyles.instructions}>Enter email and password </Text>
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
          <TouchableOpacity disabled={validateForm()} onPress = {handleSubmit}
            style = {logRegisterStyles.button}>
            <Text style= {logRegisterStyles.textInButton}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Register')}>
            <Text style = {logRegisterStyles.bottomText}>
              Don't have an account yet?
              <Text style={{color: "#38B000"}}>  Sign up</Text>
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login