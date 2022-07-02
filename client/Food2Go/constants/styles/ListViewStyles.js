import { StyleSheet } from "react-native";

const listViewStyles = StyleSheet.create({
    descriptioncontainer : {
        width: "95%",
        height: 100,
        paddingHorizontal: 10,
        marginTop: -2,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "black",
        borderWidth: 2,
        borderTopWidth: 0,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignSelf: 'center',
        marginBottom: 20,
        flex: 1,
        flexDirection: 'column'
    },
    textcontainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: '700', 
        fontSize: 18, 
        paddingTop: 10
    },
    subtitle: {
        fontWeight: '300', 
        fontSize: 18,
        paddingTop: 10, 
        color: "#CBCBCB"
    },
    restaurantlistcontainer : {
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 1,
        margin: 2,
    }, 
    imagecontainer: {
        width: "95%",
        height: 200,
        alignSelf: 'center', 
        borderColor: "black",
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 0,
    },
    image: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})

export default listViewStyles