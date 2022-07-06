import { StyleSheet } from "react-native";

const navBarStyles = StyleSheet.create({
    header: {
        backgroundColor: '#38b000',
        fontSize: '10px',
        fontColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height :50,
        width: '100%',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15
      },
    bottom: {
        backgroundColor: '#38b000',
        fontSize: '10px',
        fontColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        height :50,
        width: '100%',
        position: 'absolute',
        bottom: 0
      },
    num :{
        position: 'absolute',
        zIndex: 10,
        height: 30,
        width: 30,
        left: '52%',
        bottom: '55%'
      }
})

export default navBarStyles