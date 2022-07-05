import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import auth from '../utils/auth';
import apiServiceJWT from './../services/ApiService';
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../App';
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
    <View style={styles.container}>
      <Image source ={icons.greenlogo} style={styles.image}/>
      <View style={styles.confirmbox}>
        <Text>Are you sure you want to log out?</Text>
        
      </View>
      <View style = {styles.optionsContainer}>
        <TouchableOpacity onPress = {handleClick}>
          <Text>
            Yes
          </Text>
        
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
          <Text>
            No
          </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  image :{
    width :'25%',
    height : '15%',
  
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  optionsContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  confirmbox :{
    
    justifyContent: 'center',
    height: '40%',
    width: '40%',
    borderStyle: 'solid',
  }
})  
export default Logout