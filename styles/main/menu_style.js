import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

// Yellow => #FDC500
// Blue => #1E0C4A

const MenuStyle = StyleSheet.create({
    recommended: {
        paddingVertical: hp('4%'),
        paddingHorizontal: wp('3%'),
    },
    recommendedTitle: {
        fontFamily: 'Nunito_bold',
        color: '#1E0C4A',
        fontSize: 16,
    }
});

export default MenuStyle;
