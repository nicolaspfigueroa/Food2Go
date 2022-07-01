import { View, Text, Image, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {RestaurantDescription} from './RestaurantDescription'
import listViewStyles from '../../constants/styles/ListViewStyles'
import React from 'react'

const RestaurantInfo = ({data}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={listViewStyles.restaurantlistcontainer}>
        <View style={listViewStyles.imagecontainer}>
          <Image
            source={data.image}
            resizeMode = "cover"
            style= {listViewStyles.image}
          />
        </View>  
        <RestaurantDescription title = {data.name}></RestaurantDescription>
      </View>
    </SafeAreaView>
  )
}

export default RestaurantInfo