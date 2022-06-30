import { View, Text } from 'react-native'
import React from 'react'

export const RestaurantDescription = ({title}) => {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: 5,
                marginTop: -5,
                flexDirection: "row",
                justifyContent: "space-between",

            }}
        >
            <Text>{title}</Text>
        </View>
    )
}