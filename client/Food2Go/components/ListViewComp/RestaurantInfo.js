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
              source={{uri: restaurant.imgUrl}}
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