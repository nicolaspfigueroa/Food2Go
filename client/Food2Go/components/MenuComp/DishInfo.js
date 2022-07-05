import { View, SafeAreaView, Image } from 'react-native'
import DishDescription from './DishDescription';
import MenuStyles from '../../constants/styles/MenuStyles';
import React from 'react'

const DishInfo = ({dish}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style = {MenuStyles.dishContainer}>
      <View style= {MenuStyles.imageContainer}>
        <Image
          source = {{uri: dish.imgUrl}}
          resizeMode = 'cover'
          style = {MenuStyles.image}
        />
      </View>
      <DishDescription dish = {dish}></DishDescription>
      </View>
    </SafeAreaView>
  )
}

export default DishInfo