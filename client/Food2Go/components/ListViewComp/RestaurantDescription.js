import { View, Text } from 'react-native'
import React from 'react'

export const RestaurantDescription = ({title}) => {
    return (
        <View
            style={{
                width: "95%",
                height: 100,
                paddingHorizontal: 10,
                marginTop: -2,
                flexDirection: "row",
                justifyContent: "space-between",
                borderColor: "black",
                borderWidth: 1,
                borderTopWidth: 0,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                alignSelf: 'center',
                marginBottom: 20,
                flex: 1,
                flexDirection: 'column'
            }}
        >   
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                 <Text style={{fontWeight: '700', fontSize: 18, paddingTop: 10}}>{title}</Text> 
                 <Text style={{fontWeight: '700', fontSize: 18, paddingTop: 10}}>rating</Text>
            </View>      
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                 <Text style={{fontWeight: '300', fontSize: 18, paddingTop: 10, color: "#CBCBCB"}}>From 5$</Text> 
                 <Text style={{fontWeight: '300', fontSize: 18, paddingTop: 10, color:"#CBCBCB"}}>location</Text>
            </View>         
        </View>
    )
}