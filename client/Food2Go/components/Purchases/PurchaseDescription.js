import { View, Text } from 'react-native'
import React from 'react'
import MenuStyles from '../../constants/styles/MenuStyles'
import ShopCartStyles from '../../constants/styles/ShopCartStyles'

const PurchaseDescription = ({purchase}) => {
  return (
    <View style = {MenuStyles.purchaseContainer}> 
      <Text style= {MenuStyles.dishTitle}>{purchase.purchase}</Text>
      <Text style = {{...MenuStyles.descriptionPurchase, fontSize: 14, fontWeight: '500'}}>$ {(purchase.price/100).toFixed(2)}</Text>
      <View style= {ShopCartStyles.quantityPurchases}>
        <Text style={ShopCartStyles.textforQuantity}>{purchase.quantity}</Text>
      </View>
    </View>
  )
}

export default PurchaseDescription