import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Onboard_one = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#ffffff',
    },
    topName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingBottom: hp('10%'),
        width: wp('100%'),
    },
    topText: {
        fontSize: 25,
        color: '#1E0C4A',
        fontFamily: 'Nunito',
    },
    imageArea: {
        backgroundColor: 'transparent',
        paddingVertical: hp('7%'),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderRadius: 230,
        resizeMode: 'contain',
        width: wp('69%'),
        height: hp('34%'),
        marginBottom: 4,
    },
    lowerText: {
        fontSize: 22,
        width: wp('70%'),
        color: '#1E0C4A',
        fontFamily: 'Nunito_bold',
        textAlign: 'center',
    },
    buttonsView: {
        width: wp('100%'),
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContinue: {
        paddingVertical: 15,
        backgroundColor: '#FDC500',
        borderRadius: 50,
        width: wp('80%'),
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Nunito',
        color: '#1E0C4A',
        marginBottom: 10,
    },
    buttonSignin: {
        paddingVertical: 13,
        borderColor: '#FDC500',
        borderRadius: 50,
        width: wp('80%'),
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Nunito',
        color: '#1E0C4A',
        borderWidth: 2,
    },
    activeIndicator: {
        display: 'flex',
        flexDirection: 'row',
        width: 40,
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
        padding: 5,
        marginBottom: 10,
    },
    activePage: {
        backgroundColor: '#FDC500',
        borderRadius: 100,
        padding: 4,
    },
    inactivePage: {
        backgroundColor: '#D9D8D8',
        borderRadius: 100,
        padding: 4,
    },
});

export default Onboard_one;