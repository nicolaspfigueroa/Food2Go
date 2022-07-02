import { FlatList, View, Text, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import icons from '../constants/icons';
import  DishService  from '../services/DishService';
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';


const NewMenu = ( {route, navigation}) => {
  
useEffect(() => {
  getDishes();
}, []);

const [dishes, setDishes] = useState([]);

const getDishes= async () => {
  try {
      console.log(route.params.restaurant.id);
      const res = await DishService.getRestaurantDishes(route.params.restaurant.id);
      setDishes(res);
      console.log(res);
      console.log(dishes);
  } catch (error) {
    console.log(error);
  }
};
  
  return (
    <SafeAreaView style={{flex: 1}}>
    <NavTop></NavTop>
    <View style={{flex: 1}}>
      <View style = {{ zIndex: 0}}>
        <Text style={{fontSize: 20, fontWeight: '600', alignSelf: 'center'}}>{route.params.restaurant.name}</Text>
        <FlatList
          data = {dishes}
          renderItem = {({item}) => <Text>{item.name}</Text>} 
          keyExtractor = {(item) => item.id}
          showsVerticalScrollIndicator = {false}
        />
      </View>
    </View>
    <NavBottom></NavBottom>
  </SafeAreaView>
  )
}



export default NewMenu
