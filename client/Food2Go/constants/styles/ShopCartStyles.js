import { StyleSheet } from "react-native"; 

const ShopCartStyles = StyleSheet.create({
    screenTitle : {
        fontSize: 24, fontWeight: '700', 
        alignSelf: 'center', 
        margin: 5, 
        backgroundColor: 'white'
    },
    totalPriceContainer: {
        width: 240,
        height: 60,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 20,
        alignSelf: 'center',
        margin: 20,
        alignContent: 'center',
    },
    leftText : {
        position: 'absolute',
        left: '5%',
        bottom: '40%', 
        fontWeight: '600',
    },
    rightText : {
        position: 'absolute',
        right: '5%',
        bottom: '40%',
        fontWeight: '600'
    }, 
    buttonContainer : {
        width: 180,
        height: 45,
        backgroundColor: '#38B000',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 20,
    }, 
    textinButton : {
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    quantityBackground : {
        width: 30, 
        height: 30, 
        borderRadius: 15,
        backgroundColor: '#386641',
        position: 'absolute', 
        bottom: '5%',
        left: '5%',
        justifyContent: 'center'
    },
    quantityPurchases: {
        width: 30, 
        height: 30, 
        borderRadius: 15,
        backgroundColor: '#386641',
        position: 'absolute', 
        bottom: '5%',
        right: '5%',
        justifyContent: 'center'
    },
    textforQuantity : {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700'
    }

})

export default ShopCartStyles