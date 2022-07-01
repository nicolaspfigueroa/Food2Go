import { View, Text } from 'react-native'
import React from 'react'
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';

const ShopCart = ({ cart, setCart }) => {
  return (
    <View>
      <NavTop></NavTop>
      <Text>ShopCart</Text>
      <NavBottom></NavBottom>
    </View>
  )
}

export default ShopCart