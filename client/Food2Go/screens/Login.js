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
    <SafeAreaView>
      <FocusedStatusBar backgroundColor = {"gray"}></FocusedStatusBar>
      <View>
        <View style = {{
          width: "100%", 
          height: 225,
          backgroundColor: "blue",
          marginBottom: 10,
        }}
        >
          <Image 
            source={assets.homeimage}
            resizeMode = "cover"
            style= {{
              width: "100%",
              height: "100%",
            }}
          >
          </Image>
        </View>
        <Text 
          style = {{
            fontSize: 30,
            fontWeight: '600',
            margin: 10,
          }} 
        >Login
        </Text>
        <Text 
          style = {{
            fontSize: 15,
            fontWeight: '300',
            margin: 10,
            color: "#737373"
          }} 
        >Enter email and password 
        </Text>
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
          <TouchableOpacity disabled={validateForm()} onPress = {handleSubmit}>
            <Text>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Register')}>
            <Text>
              Register Account
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login