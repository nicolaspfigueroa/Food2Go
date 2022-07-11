import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {RestaurantDescription} from './RestaurantDescription'
import listViewStyles from '../../constants/styles/ListViewStyles'
import icons from '../../constants/icons'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const RestaurantInfo = ({restaurant}) => {
  const navigation = useNavigation();

  const { favorites, setFavorites } = useContext(CartContext); 

  const addToFavs = (item) => {
   setFavorites((prevValue) => [...prevValue, item]);
   console.log(item.name);
  }


  //
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={listViewStyles.restaurantlistcontainer}>
        <TouchableOpacity onPress={() => {navigation.navigate("Menu", {restaurant} )}}>
          <View style={listViewStyles.imagecontainer}>
            <Image
              source={{uri: restaurant.imgUrl}}
              resizeMode = 'contain'
              style= {listViewStyles.image}
            />
          </View>
        </TouchableOpacity>    
        <RestaurantDescription restaurant = {restaurant}></RestaurantDescription>
        {favorites.find(item => item.id == restaurant.id)?
        <Image source={icons.emptyheart} style={listViewStyles.eheart}/> :
        <TouchableOpacity onPress={()=>addToFavs(restaurant)}>
        <Image source={icons.heart} style={listViewStyles.heart}/>
      </TouchableOpacity>}
        
        
        </View>
      
    </SafeAreaView>
  )
}

export default RestaurantInfo

//in source={}