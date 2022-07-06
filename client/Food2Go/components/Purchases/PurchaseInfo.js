import { View, SafeAreaView, Text } from 'react-native'
import MenuStyles from '../../constants/styles/MenuStyles';
import React from 'react'

const PurchaseInfo = ({purchase}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style = {MenuStyles.dishContainer}>
        <Text>{purchase.purchase}</Text>
        <Text>{purchase.price}</Text>
        <Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default PurchaseInfo