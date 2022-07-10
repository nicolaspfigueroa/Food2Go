import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext } from 'react'
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import assets from '../constants/assets';
import icons from '../constants/icons';
import ProfileStyles from '../constants/styles/ProfileStyles';
import { ProfileContext } from '../context/ProfileContext';


const Profile = () => {

  const {profile, setProfile} = useContext(ProfileContext);

  const nickname = profile.nickname || 'Missing';

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
        const { id, nickname } = userInfo;
        setProfile((prevState) => {
          return {
            ...prevState,
            id,
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
          <TouchableOpacity onPress = {() => navigation.navigate('RecentPurchases')} style={ProfileStyles.buttonContainerRec} >
              <Image style={ProfileStyles.textRecInButton}
                source={icons.recent}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Logout')} style={ProfileStyles.buttonContainer} >
              <Image style={ProfileStyles.textInButton}
                source={icons.logout}/>
          </TouchableOpacity>
        </ScrollView>
      <NavBottom></NavBottom>
    </SafeAreaView>
  )
}

export default Profile