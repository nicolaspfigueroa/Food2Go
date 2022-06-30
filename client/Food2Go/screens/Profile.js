import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

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
    <View>
      <Text>Welcome back, {nickname}!</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('Logout')}>
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile