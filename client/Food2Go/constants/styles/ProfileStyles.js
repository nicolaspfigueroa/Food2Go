import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    title: {
        fontWeight: '300', 
        fontSize: 24, 
        alignSelf: 'center', 
        margin: 20 
    }, 
    profileContainer : {
        width: 150,
        height: 150,
        borderRadius: 75, 
        backgroundColor: 'blue',
        alignSelf: 'center',
    },
    profileimage : {
        width: '100%',
        height: '100%', 
        borderRadius: 75
    }, 
    nickname : {
        fontWeight: '300',
        fontSize: 20, 
        alignSelf: 'center',
        margin: 6 
    },
    iconFav : {
        left: 20, 
        width:150,
        height:50
    }, 
    favoritesContainer : {
        flex: 1, 
        flexWrap: 'wrap', 
        flexDirection:'row', 
        justifyContent: 'space-around'
    }, 
    favoriteImage : {
        width: 120,
        height: 120,
        backgroundColor: 'blue',
        margin: 10,
        borderRadius: 30,
    }, 
    buttonContainer : {
        alignSelf: "center",
        width: 180,
        height: 50,
        backgroundColor: '#38B800',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 10,
    }, 
    buttonContainerRec : {
        alignSelf: "center",
        width: 180,
        height: 70,
        backgroundColor: '#38B000',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 10,
    }, 
    favsContainer : {
        alignSelf: "center",
        width: 180,
        height: 60,
        backgroundColor: '#38B000',
        borderRadius: 30,
        justifyContent: 'center',
    },
    textRecInButton : {
        marginBottom: 5,
        width:120, 
        height:60,
        alignSelf: "center",
        zIndex: 10,
    }, 
    textInButton : {
        marginBottom: 5,
        width:100, 
        height:44,
        alignSelf: "center",
        zIndex: 10,
    }
})

export default ProfileStyles