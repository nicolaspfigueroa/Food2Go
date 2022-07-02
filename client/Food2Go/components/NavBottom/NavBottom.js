import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import icons from '../../constants/icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";
import { CartContext } from '../../context/CartContext';

const NavBottom = () => {

  const navigation = useNavigation();

  const { cart } =useContext(CartContext);

  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress = {() => navigation.navigate('ListView')}>        
            <Image source={icons.list} style={{width:35,height:35, marginLeft:15}} />
      </TouchableOpacity>
      <Text>{cart.length}</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('ShopCart')}>  
        
        <Image source={icons.cart} style={{width:66,height:66, marginBottom:15}} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress = {() => navigation.navigate('MapScreen')}>        
            <Image source={icons.map} style={{width:35,height:35, marginRight:15}} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({   
    bottom: {
      
      backgroundColor: '#38b000',
      fontSize: '10px',
      fontColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
     
      height :40,
      width: '100%',
    }
})
export default NavBottom