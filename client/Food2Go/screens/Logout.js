import { View, Text, TouchableOpacity, Image } from 'react-native'
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import { useNavigation } from "@react-navigation/native";
import logOutStyles from '../constants/styles/LogOutStyles';
import icons from "../constants/icons";


const Logout = (props) => {

  const navigation = useNavigation();

  const handleClick = () => {
    removeToken();
    handleAuth();
  };

  const removeToken = () => {
    apiServiceJWT.logout('accessToken');
  };

  const handleAuth = () => {
    props.setIsAuthenticated(false);
    auth.logout(() => navigation.navigate('Login'));
  };

  return (
    <View style={logOutStyles.container}>
      <Image source ={icons.greenlogo} style={logOutStyles.image}/>
      <View style={logOutStyles.confirmbox}>
        <Text  style={logOutStyles.text}>Are you sure you want to log out?</Text>
        
      </View>
      <View style = {logOutStyles.optionsContainer}>
        <TouchableOpacity onPress = {handleClick}>
          <View style = {logOutStyles.button}>
          <Image source={icons.yes}  style={logOutStyles.yn}/>
          </View>
        
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
        <View style = {logOutStyles.button}>
            <Image source={icons.no} style={logOutStyles.yn}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Logout