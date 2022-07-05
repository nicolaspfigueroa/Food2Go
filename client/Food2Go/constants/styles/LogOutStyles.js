import { StyleSheet } from "react-native";

const logOutStyles = StyleSheet.create({
    image :{
        width :'25%',
        height : '15%',
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      confirmbox: {
        marginTop : 20, 
        backgroundColor:'#C0C0C0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
      },
      optionsContainer: {
        marginTop : 20,
        flex: 0.5,
        flexDirection: 'row',
      },
      text : {
        fontWeight: '300', 
        fontSize: 15, 
        alignSelf: 'center', 
        margin: 20 
      },
      yn :{
        marginLeft: 10,
        width: 40,
        height: 40,
      },
      button : {
        marginRight: 30,
        width: '80%',
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C0C0C0'
      }
    
})

export default logOutStyles