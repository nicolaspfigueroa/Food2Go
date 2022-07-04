import { FlatList, View, Text, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import icons from '../constants/icons';
import  DishService  from '../services/DishService';
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import DishInfo from '../components/MenuComp/DishInfo';
import MenuStyles from '../constants/styles/MenuStyles';

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
        <Text style={MenuStyles.restaurantTitle}>{route.params.restaurant.name}</Text>
        <FlatList
          data = {dishes}
          renderItem = {({item}) => <DishInfo dish = {item}></DishInfo>} 
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
