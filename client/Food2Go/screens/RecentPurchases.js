import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import MenuStyles from '../constants/styles/MenuStyles';
import PurchaseInfo from '../components/Purchases/PurchaseInfo';
import purchaseService from '../services/PurchaseService';
import { ProfileContext } from '../context/ProfileContext';

const RecentPurchases = () => {

  const [groupPurchase, setgroupPurchase] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const {profile, setProfile} = useContext(ProfileContext);

  const getPurchases = async () => {
    try {
      const res = await purchaseService.getAllPurchases(profile.id);
      setPurchases(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const groupPurchases = () => {
    //loop through purchases array, obtain all "createdAt", push to an array
    //for each "createdAt" loop through, add all with the same time stamp and set groupPurchases
    getPurchases();
    //console.log(purchases);
    const timeStampArr = [];
    purchases.forEach((purchase) => {
      timeStampArr.push(purchase.createdAt);
    })
    console.log(timeStampArr);
    for (let i=0; i<timeStampArr.length; i++) {
      const purchArr = [timeStampArr[i]];
      purchases.forEach((purchase) => {
        if (purchase.createdAt === timeStampArr[i]) {
          purchArr.push(purchase);
        }
      })
      setgroupPurchase((prevValue) => [...prevValue, purchArr]);
    }
    console.log(groupPurchase);
  }


  
  useEffect(() => {
    getPurchases();
    groupPurchases();
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavTop></NavTop>
      <View style={{flex: 1}}>
        <View style = {{ zIndex: 0}}>
          <Text style={MenuStyles.restaurantTitle}>Recent Purchases</Text>
          <FlatList
            data = {purchases}
            renderItem = {({item}) => <PurchaseInfo purchase = {item}></PurchaseInfo>} 
            keyExtractor = {(item) => item.id}
            showsVerticalScrollIndicator = {false}
          />
        </View>
      </View>
      <NavBottom></NavBottom>
    </SafeAreaView>
  )
}

export default RecentPurchases