import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import icons from '../../constants/icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";


const NavTop = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>        
            <Image source={icons.profile} style={{width:35,height:35, marginLeft:15}} />
      </TouchableOpacity>
      <Image source={icons.whitelogo} style={{width:50,height:50, marginRight:10}} />
    </View>
  )
}

const styles = StyleSheet.create({   
    header: {
      
      backgroundColor: '#38b000',
      fontSize: '10px',
      fontColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
     
      height :70,
      width: '100%',
    }
})
export default NavTop