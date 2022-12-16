import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AuthStyle = StyleSheet.create({
    authContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('100%'),
    },
    topButtons: {
        display: 'flex',
        width: wp('100%'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: wp('2%'),
    },
    topTexts: {
        color: '#1E0C4A',
        backgroundColor: 'transparent',
        fontFamily: 'Nunito_bold',
        fontSize: 20,
        width: wp('40%'),
        paddingHorizontal: 20,
        paddingVertical: 2,
    },
    toTheRight: {
        textAlign: 'right',
    },
    selectedBorder: {
        borderBottomColor: '#FDC500',
        borderBottomWidth: 3
    },
    usSelectedBorder: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 3,
    },
    welcomeBack: {
        width: wp('100%'),
        paddingHorizontal: wp('2%'),
        paddingVertical: 15,
        fontFamily: 'Nunito',
        fontSize: 15,
    },
    mainContent: {
        paddingVertical: 30,
        backgroundColor: '#ffffff',
        width: wp('100%'),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30,
        width: wp('100%'),
    },
    button: {
        backgroundColor: '#FDC500',
        paddingVertical: 8,
        fontFamily: 'Nunito_bold',
        fontSize: 17,
        width: wp('80%'),
        borderRadius: 100,
        textAlign: 'center',
        color: '#1E0C4A'
    },
    otherOptions: {
        paddingVertical: 10,
        width: wp('100%'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texts: {
        color: '#1E0C4A',
        fontFamily: 'Nunito',
        paddingVertical: 3,
        fontSize: 14,
    }, 
    imageView: {
        display: 'flex',
        flexDirection: 'row',
        width: wp('25%'),
        justifyContent: 'space-around',
        paddingVertical: 5,
    },
    image: {
        width: 25,
        height: 25,
    },
});

export default AuthStyle;
