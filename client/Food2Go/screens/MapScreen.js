
import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import  RestaurantService  from '../services/RestaurantService'
import mapScreenStyles from '../constants/styles/MapScreenStyles';
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';


const MapScreen = ()=> {
  const navigation = useNavigation();

useEffect(() => {
  getRestaurants();
}, []);

const [restaurants, setRestaurants] = useState([]);

const getRestaurants= async () => {
  try {
    const res = await RestaurantService.getRestaurants();
    setRestaurants(res);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <View style={mapScreenStyles.container}>
      <NavTop></NavTop>
      
      <MapView style={mapScreenStyles.map} 
       initialRegion={{
        
        latitude: 4.69903,
        longitude: -74.02959,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}>
       
         {restaurants.map((restaurant) => (
    <Marker
      key={restaurant.id}
      title={restaurant.name}
      coordinate={{latitude:parseFloat(restaurant.lat), longitude: parseFloat(restaurant.long)}}
      >
      <Callout onPress={() => {navigation.navigate("Menu", {restaurant} )
}}>
        <View style={mapScreenStyles.imgcontainer}>
            <Text>
              {restaurant.name}

            </Text>
        </View> 
      </Callout>      
    </Marker>
  ))}
        </MapView>
      <NavBottom></NavBottom>
    </View>
  );
}


export default MapScreen
