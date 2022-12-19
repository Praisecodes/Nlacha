import { Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Header({ page }) {
    return (
        <Text style={{
            fontFamily: "Nunito_bold",
            fontSize: 23,
            color: '#1E0C4A',
            paddingVertical: hp('4%'),
            textAlign: "center",
        }}>
            {page}
        </Text>
    )
}