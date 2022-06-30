import { View, StyleSheet } from 'react-native'
import React, { Component } from 'react'




const Headline = () => {
  return (
    <View style={styles.headline}>
       <TouchableWithoutFeedback ><Image source={require("./goback.png")} style={{width:50,height:50}} /> 
      </TouchableWithoutFeedback>
       <Image source={require("./logo.png")} style={{width:50,height:50, marginRight:10}} />
    </View>
  )
}
const styles = StyleSheet.create({
    headline :{ flex: 1,
    backgroundColor: '#38b000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    height :5,
    width: '100%',
  },})

export default Headline