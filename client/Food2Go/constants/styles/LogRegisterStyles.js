import { StyleSheet } from "react-native";

const green = "#38B000";
const gray = "#737373";

const logRegisterStyles = StyleSheet.create({
    header: {
        width: "100%", 
        height: 225,
        marginBottom: 10,
    },
    banner: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10,
        marginLeft: 10
    },  
    food2go: {
        position : "absolute",
        marginTop: 60,
        height: 70,
        width: 120,
        marginLeft: 10,
        zIndex: 10,

    }, 
    slogan: {
        position : "absolute",
        marginTop: 120,
        height: 50,
        width: 90,
        marginLeft: 22,
        zIndex: 10,

    },
    instructions: {
        fontSize: 14,
        fontWeight: '300',
        margin: 10,
        
        color: gray
    }, 
    button: {
        alignSelf: "center",
        width: 180,
        height: 45,
        backgroundColor: green,
        borderRadius: 30,
        justifyContent: 'center'
    },
    imgInButton: {
        width: 77,
        height: 40,
        marginLeft: 50
    }, 
    bottomText : {
        alignSelf: 'center',
        margin: 10,
        paddingTop: 15
    }
})

export default logRegisterStyles