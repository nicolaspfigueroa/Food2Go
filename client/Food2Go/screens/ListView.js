import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Text} from 'react-native';
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import { RestaurantData } from '../components/ListViewComp/mockdb';
import RestaurantInfo from '../components/ListViewComp/RestaurantInfo';


const ListView = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavTop></NavTop>
      <View style={{flex: 1}}>
        <View style = {{ zIndex: 0}}>
          <FlatList
            data = {RestaurantData}
            renderItem = {({item}) => <RestaurantInfo data = {item}></RestaurantInfo>} 
            keyExtractor = {(item) => item.id}
            showsVerticalScrollIndicator = {false}
          />
        </View>
      </View>
      <NavBottom></NavBottom>
    </SafeAreaView>
  )
}

export default ListView