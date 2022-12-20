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
        overflow: 'hidden',
    },
    titleTextInput: {
        backgroundColor: 'transparent',
        fontFamily: 'Nunito',
        fontSize: 16,
        paddingHorizontal: 8,
        paddingVertical: 8,
        overflow: 'hidden',
        width: wp('83%'),
    },
    searchBtn: {
        paddingHorizontal: 5,
        fontWeight: 'bold'
    },

    productsView: {
        paddingHorizontal: wp('4%'),
        paddingVertical: hp("1%"),
    },
    productsViewText: {
        fontFamily: 'Nunito_bold',
        color: '#1E0C4A',
        fontSize: 20,
    },
    productsViewMenu: {
        display: "flex",
        flexDirection: 'row',
        // paddingHorizontal: ,
        paddingVertical: hp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    productsMenuView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    productsViewMenuText: {
        fontFamily: 'Nunito',
        fontSize: 18,
        marginHorizontal: wp('2%'),
        padding: 3,
        color: '#1E0C4A',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    selected: {
        borderBottomColor: '#FDC500',
        borderBottomWidth: 2,
    },
    productsImage: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    popChoices: {
        paddingHorizontal: wp('4%'),
    }
});

export default HomepageStyle;
