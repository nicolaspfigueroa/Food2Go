import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";



const CartItem = ({ item }) => {

  const {cart, setCart} = useContext(CartContext);

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
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.quantity}</Text>
      <TouchableOpacity onPress={() => handleDeleteCart(item.id)}>
        <Text>Remove from Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartItem