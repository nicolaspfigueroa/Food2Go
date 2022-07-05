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
        <Text  style={{fontWeight: '300', fontSize: 15, alignSelf: 'center', margin: 20 }}>Are you sure you want to log out?</Text>
        
      </View>
      <View style = {styles.optionsContainer}>
        <TouchableOpacity onPress = {handleClick}>
          <View style = {styles.button}>
          <Image source={icons.yes}  style={styles.yn}/>
          </View>
        
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
        <View style = {styles.button}>
            <Image source={icons.no} style={styles.yn}/>
          </View>
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
  confirmbox: {
    marginTop : 20,
    borderWidth: 1.5, 
    backgroundColor:'#C0C0C0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
 
  },
  optionsContainer: {
    marginTop : 20,
    flex: 0.5,
    flexDirection: 'row',

   
    
  },
 
  yn :{
    marginLeft: 10,
    width: 40,
    height: 40,
  },
  button : {
    marginRight: 30,
    width: '80%',
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0'

  }

})  
export default Logout