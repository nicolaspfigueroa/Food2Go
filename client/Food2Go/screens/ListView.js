import React, {useEffect, useState }from 'react'
import { View, SafeAreaView, FlatList} from 'react-native';
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import RestaurantInfo from '../components/ListViewComp/RestaurantInfo';
import restaurantService from '../services/RestaurantService';


const ListView = () => {
  
  useEffect(() => {
    getRestaurants();
  }, []);
  
  const [restaurants, setRestaurants] = useState([]);
  
  const getRestaurants= async () => {
    try {
      const res = await restaurantService.getRestaurants();
      setRestaurants(res);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <NavTop></NavTop>
      <View style={{flex: 1}}>
        <View style = {{ zIndex: 0}}>
          <FlatList
            data = {restaurants}
            renderItem = {({item}) => <RestaurantInfo restaurant = {item}></RestaurantInfo>} 
            keyExtractor = {(item) => item.id}
            showsVerticalScrollIndicator = {false}
            style = {{height: '95%'}}
          />
        </View>
      </View>
      <NavBottom></NavBottom>
    </SafeAreaView>
  )
}

export default ListView