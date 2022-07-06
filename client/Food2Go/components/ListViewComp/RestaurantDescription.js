import { View, Text } from 'react-native'
import listViewStyles from '../../constants/styles/ListViewStyles'
import React from 'react'
import { getDistance } from '../../utils/getDistance'

export const RestaurantDescription = ({restaurant}) => {

    const myLocation = {lat: 4.68903, long: -74.03959}; 
    const distance = getDistance(myLocation, restaurant.lat, restaurant.long);
    return (
        <View style={listViewStyles.descriptioncontainer}>   
            <View style={listViewStyles.textcontainer}>
                 <Text style={listViewStyles.title}>{restaurant.name}</Text> 
                 <Text style={listViewStyles.title}>4.5/5</Text>
            </View>      
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                 <Text style={listViewStyles.subtitle}>From 5$</Text> 
                 <Text style={listViewStyles.subtitle}>{distance} meters</Text>
            </View>         
        </View>
    )
}