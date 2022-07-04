import { View, Text, TouchableOpacity } from 'react-native'
import MenuStyles from '../../constants/styles/MenuStyles'
import ShopCartStyles from '../../constants/styles/ShopCartStyles'
import React from 'react'

const CartDescription = ({item, deleteFromCart}) => {
  return (
    <View style = {MenuStyles.textContainer}> 
      <Text style= {MenuStyles.dishTitle}>{item.name}</Text>
      <Text style = {MenuStyles.description}>{item.price} pesos</Text>
      <TouchableOpacity onPress={() => {deleteFromCart(item.id)}} style={MenuStyles.buttonContainer}>
        <Text style={MenuStyles.buttonText}>Remove</Text>
      </TouchableOpacity> 
      <View style= {ShopCartStyles.quantityBackground}>
        <Text style={ShopCartStyles.textforQuantity}>{item.quantity}</Text>
      </View>
    </View>
  )
}

export default CartDescription