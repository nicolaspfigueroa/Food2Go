import { View, Text, TouchableOpacity } from 'react-native'
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../App';


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
    <View>
      <Text>Are you sure you want to log out?</Text>
      <TouchableOpacity onPress = {handleClick}>Yes</TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>No</TouchableOpacity>
    </View>
  )
}

export default Logout