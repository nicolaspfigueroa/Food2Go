import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";


const NavBar = () => {

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
        <Text>
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate('MapScreen')}>
        <Text>
          Map
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate('ShopCart')}>
        <Text>
          Shopping Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate('ListView')}>
        <Text>
          List View
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar