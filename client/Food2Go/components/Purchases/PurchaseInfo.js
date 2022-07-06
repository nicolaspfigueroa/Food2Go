import { View, SafeAreaView, Text } from 'react-native'
import MenuStyles from '../../constants/styles/MenuStyles';
import React from 'react'
import PurchaseDescription from './PurchaseDescription';

const PurchaseInfo = ({purchase}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style = {{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
        <PurchaseDescription purchase = {purchase}></PurchaseDescription>
      </View>
    </SafeAreaView>
  )
}

{/* <View style = {MenuStyles.dishContainer}>
<Text style= {MenuStyles.dishTitle}>{purchase.purchase}</Text>
<Text style={MenuStyles.price}>{(purchase.price/100).toFixed(2)}</Text>
<Text></Text>
</View> */}

export default PurchaseInfo