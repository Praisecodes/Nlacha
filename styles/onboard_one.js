import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Onboard_one = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
    },
    topName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: wp('100%'),
    },
    topText: {
        fontSize: 25,
        color: '#1E0C4A',
        fontFamily: 'Nunito',
    },
    imageArea: {
        backgroundColor: '#cccccc',
        paddingVertical: hp('15%'),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Onboard_one;