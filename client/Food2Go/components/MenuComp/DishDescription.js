import { View, Text, TouchableOpacity } from 'react-native'
import MenuStyles from '../../constants/styles/MenuStyles'
import React from 'react'

const DishDescription = ({title, price}) => {
  return (
    <View style = {MenuStyles.textContainer}> 
      <Text style= {MenuStyles.dishTitle}>{title}</Text>
      <Text style = {MenuStyles.description}>Description goes here</Text>
      <Text style={MenuStyles.price}>{price} pesos</Text>
      <TouchableOpacity style={MenuStyles.buttonContainer}>
        <Text style={MenuStyles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DishDescription