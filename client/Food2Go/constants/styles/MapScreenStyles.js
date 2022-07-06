import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const mapScreenStyles  = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    imgcontainer: {
      flex: 1,
      
    },
    tinyLogo: {
      width: 150,
      height: 20,
      marginBottom: 30,
    },
    map: {
      width: Dimensions.get('window').width,
      height: "100%",
    },
    img: {
      
      width:80,
      height:80,
      marginTop:510,
      marginLeft: 243,
      position: 'absolute',
      zIndex: 10,
      alignSelf: 'flex-end'
    },
    shoopimg: {
      width:80,
      height:80,
      marginTop:490,
      marginRight: 100,
      
      position: 'absolute',
      zIndex: 10,
      
      
    }
  });

  export default mapScreenStyles