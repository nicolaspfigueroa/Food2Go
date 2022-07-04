import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import icons from '../../constants/icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";
import { CartContext } from '../../context/CartContext';

const NavBottom = () => {

  const navigation = useNavigation();

  //const { numInCart } =useContext(CartContext);
  const {cart, setCart} = useContext(CartContext); 
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    //let totalPrice = [100];
    setQuantity(getTotalQuantity(cart));
    
  }, [cart]);


  const getTotalQuantity = (cart) => {
    let total = 0;
    if (cart.length === 0) {
      return '';
    }
    else {
      total = cart.reduce((a,b) => {
        return a + b.quantity;
      }, 0)
    }
    return total;
  }

  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress = {() => navigation.navigate('ListView')}>        
            <Image source={icons.list} style={{width:35,height:35, marginLeft:15}} />
      </TouchableOpacity>
      {quantity>0 &&<Image style ={styles.num} source={icons[`n${quantity}`]}/>}
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
      borderTopEndRadius: 15,
      borderTopStartRadius: 15,
      height :50,
      width: '100%',
    },

    num :{
      position: 'absolute',
      zIndex: 10,
      height: 30,
      width: 30,
      left: '52%',
      bottom: '55%'
    }

})
export default NavBottom