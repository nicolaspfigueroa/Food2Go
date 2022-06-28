//consider that you need an Id from restaurant as a prop to use the service getRestaurant by Id 
import { View, Text } from 'react-native'
import React from 'react'


const Menu = ( {restaurant, navigation}) => {
  console.dir(restaurant);
  return (
    <View>
      <Text onPress={()=>navigation.goBack()} style={{paddingTop:100}}>Go back </Text>
      <Text>Hola</Text>
    </View>
  )
}

export default Menu