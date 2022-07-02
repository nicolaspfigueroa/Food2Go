import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {RestaurantDescription} from './RestaurantDescription'
import listViewStyles from '../../constants/styles/ListViewStyles'


const RestaurantInfo = ({data}) => {
  console.log(data.image)
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{data.id} {data.name}</Text>
      <TouchableOpacity onPress={() => {navigation.navigate("Menu", {data} )}}>
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
        <RestaurantDescription title = {data.name}></RestaurantDescription>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default RestaurantInfo