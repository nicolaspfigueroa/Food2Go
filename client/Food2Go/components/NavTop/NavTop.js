import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../../constants/icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";
import navBarStyles from '../../constants/styles/NavBarStyles';


const NavTop = () => {

  const navigation = useNavigation();

  return (
    <View style={navBarStyles.header}>
      <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>        
            <Image source={icons.profile} style={{width:35,height:35, marginLeft:15}} />
      </TouchableOpacity>
      <Image source={icons.whitelogo} style={{width:50,height:50, marginRight:10}} />
    </View>
  )
} 

export default NavTop