import { View, Text, Image, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {RestaurantDescription} from './RestaurantDescription'
import React from 'react'

const RestaurantInfo = ({data}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          marginBottom: 1,
          margin: 2,
        }}
      >
        <View 
          style={{
            width: "95%",
            height: 200,
            alignSelf: 'center', 
            borderColor: "black",
            borderWidth: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 0,
          }}
        >
          <Image
            source={data.image}
            resizeMode = "cover"
            style= {{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>  
        <RestaurantDescription title = {data.name}></RestaurantDescription>
      </View>
    </SafeAreaView>
  )
}

export default RestaurantInfo