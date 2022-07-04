import { View, Text } from 'react-native'
import React from 'react'

const CartItem = ({ item, handleDeleteCart }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.quantity}</Text>
    </View>
  )
}

export default CartItem