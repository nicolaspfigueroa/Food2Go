import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import assets from '../constants/assets';
import icons from '../constants/icons';
import ProfileStyles from '../constants/styles/ProfileStyles';

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
          <Text style={ProfileStyles.title}>Welcome back!</Text>
          <View style={ProfileStyles.profileContainer}>  
            <Image 
              resizeMode='cover'
              source={assets.profilepicture}
              style= {ProfileStyles.profileimage}     
            />        
          </View>
          <Text style={ProfileStyles.nickname}>{nickname}</Text>
            <View style={ProfileStyles.favsContainer}>
            <Image source={icons.favs} style={ProfileStyles.iconFav}/>
            </View>
          <View style={ProfileStyles.favoritesContainer}>
            <View style={ProfileStyles.favoriteImage}></View>
            <View style={ProfileStyles.favoriteImage}></View>
            <View style={ProfileStyles.favoriteImage}></View>
          </View>
          <TouchableOpacity onPress = {() => navigation.navigate('Logout')} style={ProfileStyles.buttonContainer} >
              <Text style={ProfileStyles.textInButton}>
                Logout
              </Text>
          </TouchableOpacity>
        </ScrollView>
      <NavBottom></NavBottom>
    </SafeAreaView>
  )
}

export default Profile