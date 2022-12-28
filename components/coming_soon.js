import { Text } from "react-native";

export default function Coming_soon ({customText}){
    return(
        <Text style={{
            fontSize: 26,
            color: '#44444455',
            padding: 20,
            textAlign: 'center',
            fontFamily: 'Nunito_bold'
        }}>
            {customText}
        </Text>
    )
}