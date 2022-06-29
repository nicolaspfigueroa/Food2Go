import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const RestaurantInfo = ({data}) => {
  const navigation = useNavigation()
  return (
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
          width: "90%",
          height: 200,
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
            margin: 1,
          }}
        />
         <Text>Hello</Text>
      </View>  
    </View>
  )
}

export default RestaurantInfo