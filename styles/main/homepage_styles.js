import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// Yellow => #FDC500
// Blue => #1E0C4A

const HomepageStyle = StyleSheet.create({
    titleView: {
        backgroundColor: '#FDC500',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        width: wp('100%'),
        paddingVertical: hp('2%'),
        paddingHorizontal: 6,
    },
    titleText: {
        color: '#1E0C4A',
        fontFamily: 'Nunito_bold',
        fontSize: 23,
    },
    titleTextInputView: {
        backgroundColor: '#ffffff',
        width: wp('95%'),
        borderRadius: 3,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    titleTextInput: {
        backgroundColor: 'transparent',
        fontFamily: 'Nunito',
        fontSize: 16,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    searchBtn: {
        paddingHorizontal: 5,
        fontWeight: 'bold'
    },
});

export default HomepageStyle;
