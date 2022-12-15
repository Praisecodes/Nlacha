import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AuthStyle = StyleSheet.create({
    authContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topButtons: {
        display: 'flex',
        width: wp('100%'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    topTexts: {
        color: '#1E0C4A',
        backgroundColor: 'transparent',
        fontFamily: 'Nunito_bold',
        fontSize: 25,
        width: wp('35%'),
        paddingHorizontal: 25,
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
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontFamily: 'Nunito',
        fontSize: 15,
    },
    mainContent: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: '#cccccc',
        width: wp('100%'),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 60,
        width: wp('100%'),
    },
    button: {
        backgroundColor: '#FDC500',
        paddingVertical: 13,
        fontFamily: 'Nunito_bold',
        fontSize: 22,
        width: wp('80%'),
        borderRadius: 100,
        textAlign: 'center',
        color: '#1E0C4A'
    },
});

export default AuthStyle;
