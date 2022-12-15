import { View, Text } from "react-native";
import AuthLayout from "../../layouts/authLayout";

export default function Signup({navigation}){
    const switchToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <AuthLayout page={'Signup'} switchToLogin={switchToLogin}>
            <Text>
                This is the signup screen
            </Text>
        </AuthLayout>
    )
}