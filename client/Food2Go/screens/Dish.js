import { StyleSheet, View, Text, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import icons from '../constants/icons'
import React from 'react'
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';



const Dish = ( {route, navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
          <NavTop></NavTop>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={()=>navigation.goBack()}><Image source={icons.goback} style={{width:50,height:50}} /> 
                </TouchableWithoutFeedback>
            </View>
            <Text>{route.params.dish.name}</Text>
          <NavBottom></NavBottom>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
   
  },
  header: {
    flex: 1,
    backgroundColor: '#38b000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:10,
    height :100,
    width: '100%',
  },
  tittle: {
    flex :1,
    width: 300,
    height: 165,
    alignItems: 'center',
    justifyContent: 'center',

  },
  menucontainer: {
    width: '100%',
    height: 350,
  },
  dish: {
    width: 100,
    height: 100,
    borderStyle : 'solid',
  },
  dishdetail: {
    width: 150,
    height: 150,
  }
});

export default Dish

