import { View, Text } from 'react-native'
import React from 'react'

const CartItem = ({ dish, handleDeleteCart }) => {
  return (
    <View>
      <Text>CartItem</Text>
      <Text>{dish.name}</Text>
      <Text>{dish.price}</Text>
    </View>
  )
}

export default CartItem