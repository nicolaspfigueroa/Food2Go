import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiServiceJWT from './../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  nickname: ''
};

const Profile = () => {
  const [state, setState] = useState(initialState);
  const nickname = state.nickname || 'Missing';

  const getAccessToken = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if(token !== null) {
        console.log('done');
        console.log('token here', token);
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
    </View>
  )
}

export default Profile