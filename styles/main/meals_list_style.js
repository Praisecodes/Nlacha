import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const MealsListStyle = StyleSheet.create({
    containerView: {
        width: '100%',
        backgroundColor: 'transparent',
        marginVertical: 10,
        borderColor: "#00000011",
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
    },
    MealImage: {
        width: '100%',
        height: hp('27%'),
        resizeMode: "cover",
    }
});

export default MealsListStyle;
