import React, { useContext, useEffect, useState } from 'react'
import { View, Image } from 'react-native'

import icons from '../../constants/icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";
import { CartContext } from '../../context/CartContext';
import navBarStyles from '../../constants/styles/NavBarStyles';

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
    <View style={navBarStyles.bottom}>
      <TouchableOpacity onPress = {() => navigation.navigate('ListView')}>        
            <Image source={icons.list} style={{width:35,height:35, marginLeft:15}} />
      </TouchableOpacity>
      {quantity>0 &&<Image style ={navBarStyles.num} source={icons[`n${quantity}`]}/>}
      <TouchableOpacity onPress = {() => navigation.navigate('ShopCart')}>  
        
        <Image source={icons.cart} style={{width:66,height:66, marginBottom:15}} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress = {() => navigation.navigate('MapScreen')}>        
            <Image source={icons.map} style={{width:35,height:35, marginRight:15}} />
      </TouchableOpacity>
    </View>
  )
}


export default NavBottom