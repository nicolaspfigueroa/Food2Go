//You need the list of all the restaurants. You can reuse the show
// import { View, Text } from 'react-native'
// import React from 'react'

// const MapView = () => {
//   return (
//     <View>
//       <Text>MapView</Text>
//     </View>
//   )
// }

// 
import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const MapScreen = ()=> {
  const navigation = useNavigation();
  const restaurants = [{_id:1,"name": "Coctel del Mar", "latitude": 4.70362, "longitude": -74.04885,
"city":"Bogota","hours":"",
"description": "Seafood restaurant", "image": "coctel-del-mar.png",
"address": "Av. Cra 19 #123-26"},
{_id:2,"name": "14 Inkas", "latitude": 4.69903, "longitude": -74.02959,
    "city":"Bogota","hours":"",
    "description": "Peruvian restaurant", "image": "14-inkas.png",
    "address": "Cl. 119b #543"},
{_id:3,"name": "Barricas tapas y Canas", "latitude": 4.69894, "longitude": -74.03861,
    "city":"Bogota","hours":"",
    "description": "Spanish restaurant", "image": "barricas-tapas-y-canas.png",
    "address": "Cl. 119 #11d-15"}
];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
       initialRegion={{
        
        latitude: 4.69903,
        longitude: -74.02959,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}>
         {restaurants.map((restaurant) => (
    <Marker
      key={restaurant._id}
      title={restaurant.name}
      coordinate={{latitude:restaurant.latitude, longitude: restaurant.longitude}}
      >
      <Callout onPress={() => {navigation.navigate("Menu", {restaurant} )
}}>
        <View >
            <Image source={require('./14-inkas.png')} style={styles.tinyLogo}/>
            <Text>
              {restaurant.description}

            </Text>
        </View> 
      </Callout>      
    </Marker>
  ))}


        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen