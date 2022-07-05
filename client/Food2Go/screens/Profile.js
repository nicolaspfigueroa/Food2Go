import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import logRegisterStyles from '../constants/styles/LogRegisterStyles';
import assets from '../constants/assets';
import icons from '../constants/icons';

const initialState = {
  nickname: ''
};

const Profile = () => {
  const [state, setState] = useState(initialState);
  const nickname = state.nickname || 'Missing';

  const navigation = useNavigation();

  const getAccessToken = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if(token !== null) {
        return token;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      const accessToken = await getAccessToken();
      const userInfo = await apiServiceJWT.profile(accessToken);
      if (userInfo) {
        const { nickname } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            nickname
          };
        });
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavTop></NavTop>
        <ScrollView>
          <Text style={{fontWeight: '300', fontSize: 24, alignSelf: 'center', margin: 20 }}>Welcome back!</Text>
          <View style={{
            width: 150,
            height: 150,
            borderRadius: 75, 
            backgroundColor: 'blue',
            alignSelf: 'center'
          }}>  
            <Image 
            resizeMode='cover'
            source={assets.profilepicture}
            style= {{
              width: '100%',
              height: '100%', 
              borderRadius: 75
              }}
          
            />        
          </View>
          <Text style={{fontWeight: '300', fontSize: 20, alignSelf: 'center', margin: 6 }}>{nickname}</Text>
            <View style={logRegisterStyles.favsContainer}>
            <Image source={icons.favs} style={{left: 20, width:150,height:50}}/>
            </View>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection:'row', justifyContent: 'space-around'}}>
            <View style={{
              width: 120,
              height: 120,
              backgroundColor: 'blue',
              margin: 10,
              borderRadius: 30,
            }}></View>
            <View style={{
              width: 120,
              height: 120,
              backgroundColor: 'blue',
              margin: 10,
              borderRadius: 30,
            }}></View>
            <View style={{
              width: 120,
              height: 120,
              backgroundColor: 'blue',
              margin: 10,
              borderRadius: 30,
            }}></View>
            <View style={{
              width: 120,
              height: 120,
              backgroundColor: 'blue',
              margin: 10,
              borderRadius: 30,
            }}></View>
          
            <TouchableOpacity onPress = {() => navigation.navigate('Logout')} style={{...logRegisterStyles.button, backgroundColor: 'red', margin: 15}} >
              <Text style={logRegisterStyles.textInButton}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      <NavBottom></NavBottom>
    </SafeAreaView>
  )
}

export default Profile