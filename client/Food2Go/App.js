import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StripeProvider } from "@stripe/stripe-react-native";
import { CartProvider } from "./context/CartContext";
import { ProfileProvider } from "./context/ProfileContext";
import ListView from "./screens/ListView";
import Login from "./screens/Login";
import MapScreen from "./screens/MapScreen";
import Menu from "./screens/Menu";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import ShopCart from "./screens/ShopCart";
import auth from './utils/auth';
import Logout from "./screens/Logout";
import RecentPurchases from "./screens/RecentPurchases";





const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}





export default function App() {

  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  

  const STRIPE_PUBLIC_KEY = "pk_test_51LAdEzKpUH6FEDK0Dpi0P8OyggQNCsGsctYqTbH1SLBR2UR46kfIivuaLuaqjxXaVGrESSz1OnbBMrAafXIwBK4n00nUlcuTtF";

  return (
    <StripeProvider publishableKey="pk_test_51LAdEzKpUH6FEDK0Dpi0P8OyggQNCsGsctYqTbH1SLBR2UR46kfIivuaLuaqjxXaVGrESSz1OnbBMrAafXIwBK4n00nUlcuTtF">
      <ProfileProvider>
      <CartProvider>
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
              <Stack.Screen name="Menu"  component={Menu} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="ShopCart" component={ShopCart} />
              <Stack.Screen name="RecentPurchases" component={RecentPurchases} />
            </Stack.Navigator>  
        </NavigationContainer>
      </CartProvider> 
      </ProfileProvider>
    </StripeProvider>
  );
}
