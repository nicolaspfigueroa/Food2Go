
import { useState, useContext, createContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import ListView from "./screens/ListView";
import Login from "./screens/Login";
import MapScreen from "./screens/MapScreen";
import Menu from "./screens/Menu";
import Dish from "./screens/Dish";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import ShopCart from "./screens/ShopCart";

export const AppContext = createContext();

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import auth from './utils/auth';
import Logout from "./screens/Logout";


export default function App() {

  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <NavigationContainer theme = {theme}>

          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Stack.Screen name="Login" >
              {props => <Login setIsAuthenticated = {setIsAuthenticated}/>}
            </Stack.Screen>
            <Stack.Screen name="Register">
              {props => <Register setIsAuthenticated = {setIsAuthenticated}/>}
            </Stack.Screen>
            <Stack.Screen name="Logout">
              {props => <Logout setIsAuthenticated = {setIsAuthenticated}/>}
            </Stack.Screen>
            <Stack.Screen name="ListView"  component={ListView} />
            <Stack.Screen name="MapScreen"  component={MapScreen} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Dish" component={Dish} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ShopCart" component={ShopCart} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}
