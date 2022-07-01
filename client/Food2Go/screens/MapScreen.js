
import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { RestaurantService } from '../services/RestaurantService'
import NavBar from "../components/NavBar/NavBar";


const MapScreen = ()=> {
  const navigation = useNavigation();
//   const restaurants = [{id:1,"name": "Coctel del Mar", "latitude": 4.70362, "longitude": -74.04885,
// "city":"Bogota","hours":"",
// "description": "Seafood restaurant", "image": "coctel-del-mar.png",
// "address": "Av. Cra 19 #123-26"},
// {id:2,"name": "14 Inkas", "latitude": 4.69903, "longitude": -74.02959,
//     "city":"Bogota","hours":"",
//     "description": "Peruvian restaurant", "image": "14-inkas.png",
//     "address": "Cl. 119b #543"},
// {id:3,"name": "Barricas tapas y Canas", "latitude": 4.69894, "longitude": -74.03861,
//     "city":"Bogota","hours":"",
//     "description": "Spanish restaurant", "image": "barricas-tapas-y-canas.png",
//     "address": "Cl. 119 #11d-15"}
// ];

//Uncomment this to get the restaurants from RestaurantService


useEffect(() => {
  getRestaurants();
}, []);

const [restaurants, setRestaurants] = useState([]);

const getRestaurants= async () => {
  const { res, error} = await RestaurantService.getRestaurants();
  if (!error) {
    setRestaurants(res);
    console.log(res);
  } else {
    setError(res);
  }
};


  return (
    <View style={styles.container}>
      
      <Text></Text>
      <MapView style={styles.map} 
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
      coordinate={{latitude:restaurant.latitude, longitude: restaurant.longitude}}
      >
      <Callout onPress={() => {navigation.navigate("Menu", {restaurant} )
}}>
        <View style={styles.imgcontainer}>
            <Text>
              {restaurant.description}

            </Text>
        </View> 
      </Callout>      
    </Marker>
  ))}


        </MapView>
        <Image style={styles.shoopimg} 
                source={require('./greenshoopingcart.png')} 
                 />
    
        <Image style={styles.img} 
                source={require('./greenlogo.png')} 
                 />
      <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  imgcontainer: {
    flex: 1,
    
  },
  tinyLogo: {
    width: 150,
    height: 20,
    marginBottom: 30,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  img: {
    
    width:80,
    height:80,
    marginTop:510,
    marginLeft: 243,
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'flex-end'
  },
  shoopimg: {
    width:80,
    height:80,
    marginTop:490,
    marginRight: 100,
    
    position: 'absolute',
    zIndex: 10,
    
    
  }
});

export default MapScreen

{/* <TouchableWithoutFeedback  style={styles.gobackimg}  onPress={()=>navigation.goBack()}><Image source={require("./goback.png")} style={styles.gobackimg} /> 
      </TouchableWithoutFeedback> */}