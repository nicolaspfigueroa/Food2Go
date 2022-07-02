import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {RestaurantDescription} from './RestaurantDescription'
import listViewStyles from '../../constants/styles/ListViewStyles'


const RestaurantInfo = ({restaurant}) => {
  const navigation = useNavigation();
  //
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={() => {navigation.navigate("Menu", {restaurant} )}}>
        <View style={listViewStyles.restaurantlistcontainer}>
          <View style={listViewStyles.imagecontainer}>
            <Image
              source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/05/db/e7/barricas-tapas-canas.jpg'
            }}
              //'../../assets/images/restaurants/barricas-tapas-y-canas.png'
              resizeMode = 'contain'
              style= {listViewStyles.image}
            />
          </View>  
          <RestaurantDescription title = {restaurant.name}></RestaurantDescription>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default RestaurantInfo