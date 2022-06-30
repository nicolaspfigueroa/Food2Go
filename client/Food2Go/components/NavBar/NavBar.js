import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";


const NavBar = () => {

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity></TouchableOpacity>
    </View>
  )
}

export default NavBar