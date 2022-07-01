import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import CartItem from '../components/Cart/CartItem';
import stripeService from '../services/StripeService';

const ShopCart = ({ cart, setCart }) => {

  const handleDeleteCart = (id) => {
    console.log(id);
    console.log(cart);
    setCart((prevValue) => {
      const allButId = prevValue.filter((dish) => dish.id !== id);
      return allButId;
    });
  };

  return (
    <View>
      <NavTop></NavTop>
      <Text>ShopCart</Text>
      {cart.map((dish) => {
        <CartItem key = {dish.id} dish = {dish} handleDeleteCart = {handleDeleteCart} ></CartItem>
      })}
      <TouchableOpacity onPress={() => stripeService.createCheckoutSession(cart)}>
        <Text>Checkout</Text>
      </TouchableOpacity>
      <NavBottom></NavBottom>
    </View>
  )
}

export default ShopCart