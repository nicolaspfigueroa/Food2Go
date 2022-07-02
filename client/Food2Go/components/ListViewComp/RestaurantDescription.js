import { View, Text } from 'react-native'
import listViewStyles from '../../constants/styles/ListViewStyles'
import React from 'react'

export const RestaurantDescription = ({title}) => {
    return (
        <View style={listViewStyles.descriptioncontainer}>   
            <View style={listViewStyles.textcontainer}>
                 <Text style={listViewStyles.title}>{title}</Text> 
                 <Text style={listViewStyles.title}>4.5/5</Text>
            </View>      
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                 <Text style={listViewStyles.subtitle}>From 5$</Text> 
                 <Text style={listViewStyles.subtitle}>location</Text>
            </View>         
        </View>
    )
}