import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Forms = StyleSheet.create({
    fieldsText: {
        fontSize: 15,
        fontFamily: 'Nunito_bold',
        color: '#000000',
        marginBottom: 5,
        marginHorizontal: wp('2%'),
    },
    inputFields: {
        width: wp('96%'),
        height: 42,
        backgroundColor: '#EAE8E8',
        borderRadius: 3,
        marginBottom: 18,
        fontSize: 13,
        fontFamily: 'Nunito',
        paddingHorizontal: 8,
        marginHorizontal: wp('2%'),
    },
    forgot: {
        width: wp('100%'),
        textAlign: 'right',
        paddingRight: wp('2%'),
        fontFamily: 'Nunito',
        color: '#1E0C4A'
    }
});

export default Forms;
