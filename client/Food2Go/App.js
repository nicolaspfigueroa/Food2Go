
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import ListView from "./screens/ListView";
import Login from "./screens/Login";
import MapView from "./screens/MapView";
import Menu from "./screens/Menu";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import ShopCart from "./screens/ShopCart";

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


export default function App() {

  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="ListView">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ListView"  component={ListView} />
        <Stack.Screen name="MapView"  component={MapView} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ShopCart" component={ShopCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
