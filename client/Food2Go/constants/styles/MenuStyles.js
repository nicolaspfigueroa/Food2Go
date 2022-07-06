import { StyleSheet } from "react-native";

const MenuStyles = StyleSheet.create({
    restaurantTitle: {fontSize: 20, fontWeight: '600', alignSelf: 'center'},
    container: {flex: 1, flexDirection: 'row', alignSelf: 'center'}, 
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    textContainer: {
        borderColor: 'black',
        borderWidth: 1.5, 
        borderLeftWidth: 0,
        width: '45%',
        height: 150, 
        margin: 10,
        marginLeft: 0,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    purchaseContainer: {
        borderColor: 'black',
        borderWidth: 1.5, 
        width: '45%',
        height: 75, 
        margin: 10,
        marginLeft: 0,
        borderRadius: 15
    },
    imageContainer: {
        borderColor: 'black',
        borderWidth: 1.5, 
        borderRightWidth: 0,
        width: '45%',
        height: 150, 
        margin: 10,
        marginRight: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    dishTitle: {
        position: 'absolute',
        top: '8%',
        left: 10,
        fontSize: 14,
        fontWeight: '700'
    },
    description: {
        position: 'absolute',
        bottom: '50%',
        left: 10,
        fontSize: 12,
        color: 'gray'
    }, 
    descriptionPurchase: {
        position: 'absolute',
        bottom: '15%',
        left: 10,
        fontSize: 12,
        color: 'gray'
    },
    price: {
        position: 'absolute',
        bottom: '8%', 
        left: 10,
        fontSize: 12,
    }, 
    buttonContainer: {
        position: 'absolute',
        bottom: '5%',
        right: 10,
        backgroundColor: '#38B000',
        width: 60,
        justifyContent: 'center',
        borderRadius: 20,
        height: 40
    }, 
    buttonText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center'
    }, 
    dishContainer : {
        flex: 1, 
        flexDirection: 'row', 
        alignSelf: 'center'
    }

})

export default MenuStyles