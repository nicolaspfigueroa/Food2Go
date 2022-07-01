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
        fontSize: 30,
        fontWeight: '600',
        margin: 10,
    }, 
    instructions: {
        fontSize: 15,
        fontWeight: '300',
        margin: 10,
        color: gray
    }, 
    button: {
        alignSelf: "center",
        width: 200,
        height: 60,
        backgroundColor: green,
        borderRadius: 30,
        justifyContent: 'center'
    },
    textInButton: {
        color: "white",
        textAlign: "center", 
        fontSize: 20,
        fontWeight: "700"
    }, 
    bottomText : {
        alignSelf: 'center',
        margin: 10,
        paddingTop: 20
    }
})

export default logRegisterStyles